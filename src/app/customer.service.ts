import { Injectable } from '@angular/core';

import { ToastrService } from 'ngx-toastr';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  user: any = []
  input = new Subject<any>();
  senduser = new Subject<number>();
  newinput = new Subject<number>();
  sendeditnewuser = new Subject<number>();



  customers: any = [{
    "fname": "virat",
    "lname": "Kohli",
    "email": "virat@gmail.com"
  }, {
    "fname": "Lokesh",
    "lname": "Rahul",
    "email": "rahul@gmail.com"
  }, {
    "fname": "rishab",
    "lname": "Panth",
    "email": "panth@gmail.com"
  }, {
    "fname": "jaspreet",
    "lname": "Bumrah",
    "email": "bumrah@gmail.com"
  }, {
    "fname": "shreyas",
    "lname": "Iyer",
    "email": "iyer@gmail.com"
  }
  ]

  getUsers() {
    return this.customers.slice();

  }


  getNewUser() {
    return this.user.slice();
  }


  getUserData(value: any) {
    this.customers.push(value);
    alert("user added successfully")
    this.postData(value)
  }

  postData(value: any) {
    this.user.push(value)
  }

  removUser(index: number) {
    this.customers.splice(index, 1);
    this.input.next(this.customers.slice());
    alert("user deleted successfully")
  }

  editUser(index: number) {
    return this.customers[index]
  }

  updateUser(index: number, value: any) {
    this.customers[index] = value;
    this.input.next(this.customers.slice());
    alert("user updated successfully")
  }


  // removeNewUser(index: number) {
  //   this.user.splice(index, 1);
  //   this.newinput.next(this.user.slice());
  //   alert("user deleted successfully")
  // }

  // editNewUser(index: number) {
  //   return this.user[index]
  // }
  // updateNewUser(index: number, value: any) {
  //   this.user[index] = value;
  //   this.input.next(this.user.slice());
  //   alert("user updated successfully")
  // }

}