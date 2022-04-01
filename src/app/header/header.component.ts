import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private auth:AuthService,private route:Router) { }
isLoggedin=false;
  ngOnInit(): void {

    this.auth.user.subscribe((res)=>{
  this.isLoggedin=true;
    })
  }

  logOut(){
    this.auth.userLogOut();
   this. isLoggedin=false;
    this.route.navigate(['/auth'])
  }

}
