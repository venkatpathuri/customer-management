import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Subject } from 'rxjs';

interface authDataAPI {
  idToken: string,
  email: string,
  refreshToken: string,
  expiresIn: string,
  localId: string,
  registered?: boolean
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user=new Subject();
  constructor(private http: HttpClient) { }

  sendDataToAPI(email: string, password: string) {




    return this.http.post<authDataAPI>("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDq-vqIERKrBB0qal-RYPSwOT83Jmng7wY", {
      email: email,
      password: password,
      returnSecureToken: true

    }


    )
  }

  sendLoginDataToAPI(email: string, password: string) {
    return this.http.post<authDataAPI>("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDq-vqIERKrBB0qal-RYPSwOT83Jmng7wY", {
      email: email,
      password: password,
      returnSecureToken: true

    }


    );

  }

  userLogOut(){
    this.user.next(null);
  }

}


