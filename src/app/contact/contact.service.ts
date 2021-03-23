import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IContact } from 'src/models/contact.models';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) { }
  url = 'http://localhost:3000';

  /*getUser() {
    return this
      .http
      .get(`${this.url}/users`);
  }*/

  createContact(data: IContact[]): Observable<Object> {
    return this.http.post(`${this.url}/api/contact/contact`, data)  
  }
}
