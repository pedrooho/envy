import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EnvelopeService{
  baseUrl = environment.apiUrl + 'envelope';

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

  getByIdUser(userId: number) {
    return this.http.get(this.baseUrl + '?userId=' + userId);
  }

  getById(id: number) {
    return this.http.get(this.baseUrl + '/' + id);
  }
}
