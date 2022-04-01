import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  isLoginMode = true;
  error: any;

  constructor(private auth:AuthService,private route:Router) { }

  ngOnInit(): void {
  }
  sendToLogin() {
    this.isLoginMode = !this.isLoginMode;
  }

  loginUser(form: NgForm) {
    const email = form.value.email
    const password = form.value.password
  
   
    if (this.isLoginMode) {
      this.auth.sendLoginDataToAPI(email, password).subscribe((res) => {
        console.log(res);

        this.auth.user.next(res);
        this.route.navigate(['/users']);

      },
      error => {
          console.error(error);
          this.error = "An error occurred"
          
        }
      );
    }
  else {

    this.auth.sendDataToAPI(email, password).subscribe((res) => {
      console.log(res);
     
    },error=>{
      console.log(error)
      this.error="An error occurred"
    }
  
    );
  }
  form.reset();

  }

}
