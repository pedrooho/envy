import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TransactionService{

  baseUrl = 'https://envy-api1.herokuapp.com/transaction/';

  constructor(private http: HttpClient) { }
  
  findAll(){
    return this.http.get(this.baseUrl);
  }

  create(model: any){
    return this.http.post(this.baseUrl, model);
  }

  update(model: any){
    return this.http.put(this.baseUrl, model);
  }

  getById(id: number) {
    return this.http.get(this.baseUrl + id);
  }

}