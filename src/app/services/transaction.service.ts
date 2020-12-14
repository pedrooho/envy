import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TransactionService{
  baseUrl = environment.apiUrl + 'transaction';

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

  getByIdEnvelope(envelopeId: number) {
    return this.http.get(this.baseUrl +'?envelopeId='+ envelopeId);
  }

  getById(id: number) {
    return this.http.get(this.baseUrl +'/'+ id);
  }
  
  getReport(model: any) {
    return this.http.get(this.baseUrl + '?createdOnFrom=' + model.createdOnFrom + 
    '&createdOnTo='+ model.createdOnTo +'&envelopeId='+ model.envelopeId);
  }

}
