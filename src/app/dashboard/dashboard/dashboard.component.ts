import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from 'src/app/customer.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  users: any = [];
  obj: any = []
  count: number = 0;
  newcount: number = 0
  constructor(private service: CustomerService, private route: Router) {

    this.users =
      this.service.getUsers();


    this.obj = this.service.getNewUser();




  }

  ngOnInit(): void {

    this.service.newinput.subscribe(res => {
      this.obj = res;
    }


    )


    for (let i = 1; i <= this.users.length; i++) {
      this.count = i
    }


    for (let i = 1; i <= this.obj.length; i++) {
      this.newcount = i

    }
  }
  // deleteUser(index: number) {
  //   this.service.removeNewUser(index);

  //   this.newcount = this.newcount - 1

  // }
  // EditUser(index: number) {


  //   this.route.navigateByUrl('/addusers');
  //   setTimeout(() => {
  //     this.service.sendeditnewuser.next(index);
  //   }, 100);
  // }

}
