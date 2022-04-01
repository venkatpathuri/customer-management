import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { CustomerService } from '../customer.service';
import { Users } from '../user.modal';

import { Router } from '@angular/router';
@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {

  formvalue!: FormGroup
  customersdata: any;
  editmode = false;
  index!: number;
  isNewUser = false;
  isOldUser = false
  constructor(private service: CustomerService, private route: Router, private formbuilder: FormBuilder,) { }

  ngOnInit(): void {



    this.formvalue = new FormGroup({
      'fname': new FormControl('',Validators.required),
      'lname': new FormControl('',Validators.required),
      'email': new FormControl('',[Validators.email,Validators.required])
    });


    this.service.senduser.subscribe((index: number) => {
      this.index = index
      this.customersdata = this.service.editUser(index)


      this.formvalue.controls['fname'].setValue(
        this.customersdata.fname
      )
      this.formvalue.controls['lname'].setValue(
        this.customersdata.lname
      )
      this.formvalue.controls['email'].setValue(
        this.customersdata.email
      )
      this.editmode = true
      this.isOldUser = true

    });


    // this.service.sendeditnewuser.subscribe((index: number) => {
    //   this.index = index
    //   this.customersdata = this.service.editNewUser(index)


    //   this.formvalue.controls['fname'].setValue(
    //     this.customersdata.fname
    //   )
    //   this.formvalue.controls['lname'].setValue(
    //     this.customersdata.lname
    //   )
    //   this.formvalue.controls['email'].setValue(
    //     this.customersdata.email
    //   )
    //   this.editmode = true
    //   this.isNewUser = true;

    // });
  }
  sendUser(value: any) {
    this.service.getUserData(value);
    this.formvalue.reset();
    this.route.navigateByUrl('/users')
  }

  updateRecord() {
    this.service.updateUser(this.index, this.formvalue.value);
    this.route.navigateByUrl('/users')
  }

  // updateNewRecord() {
  //   this.service.updateNewUser(this.index, this.formvalue.value);
  //   this.route.navigateByUrl('/users')
  // }

}
