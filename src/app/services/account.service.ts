import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
 
  loggedIn = false;
  jwtHelper = new JwtHelperService();
  baseUrl = 'https://envy-api1.herokuapp.com/';
  currentUser: User;
  decodedToken: any;
 
  constructor(private http: HttpClient) { }
 
  login(model: any) {
    return this.http.post(this.baseUrl + 'login', model, { observe: 'response'})
    .pipe (
      map((response: any) => {
        const token = response.headers.get('Authorization');
        if (token) {
          localStorage.setItem('token', token);
          this.decodedToken = this.jwtHelper.decodeToken(token);
          this.currentUser = new User(this.decodedToken.sub, this.decodedToken.id);
          localStorage.setItem('user', JSON.stringify(this.currentUser));
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