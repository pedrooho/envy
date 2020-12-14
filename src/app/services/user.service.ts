import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService{

  baseUrl = 'https://envy-api1.herokuapp.com/user/';

  constructor(private http: HttpClient) { }
  
  findAll(){
    return this.http.get(this.baseUrl);
  }

  update(model: any){
    return this.http.put(this.baseUrl, model);
  }

  changePassword(model: any){
    return this.http.patch(this.baseUrl, model);
  }

}
