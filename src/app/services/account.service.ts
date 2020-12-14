import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';
import { UserModel } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  loggedIn = false;
  jwtHelper = new JwtHelperService();
  baseUrl = 'https://envy-api1.herokuapp.com/';
  currentUser: UserModel;
  decodedToken: any;

  constructor(private http: HttpClient) { }

  login(model: any) {
    return this.http.post(this.baseUrl + 'login', model, { observe: 'response'})
    .pipe (
      map((response: any) => {
        const userAuth = response;
        if (userAuth) {
          localStorage.setItem('token', userAuth.token);
          localStorage.setItem('user', JSON.stringify(userAuth.user));
          this.decodedToken = this.jwtHelper.decodeToken(userAuth.token);
          this.currentUser = userAuth.user;
          return response;
        }
      })
    );
  }

  forgotPassword(model: any){
    return this.http.post(this.baseUrl + 'auth/forgot', model);
  }

  refreshToken(){
    return this.http.post(this.baseUrl + 'auth/forgot', null);
  }

  register(model: any){
    return this.http.post(this.baseUrl + 'auth/register', model);
  }
}
