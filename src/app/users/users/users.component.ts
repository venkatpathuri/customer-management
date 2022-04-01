import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from 'src/app/customer.service';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: any = []
  constructor(private service: CustomerService, private route: Router) {
    this.users = this.service.getUsers();
    
  }

  ngOnInit(): void {

    this.service.input.subscribe(res => {
      this.users = res;
    });
    this.users = this.service.getUsers();

  }
  navigate() {
    this.route.navigateByUrl('/addusers');
  }
  deleteUser(index: number) {
    this.service.removUser(index)
  }
  editUser(index: number) {
    this.route.navigateByUrl('/addusers');
    setTimeout(() => {
      this.service.senduser.next(index);
    }, 100);


  }

}
