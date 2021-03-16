import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


import { IUser } from 'src/models/user.models';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }
  url = 'http://localhost:3000';

  /*getUser() {
    return this
      .http
      .get(`${this.url}/users`);
  }*/

  createUser(data: IUser[]): Observable<Object> {
    return this.http.post(`${this.url}/api/auth/registration`, data)  
  }
  loginUser(data: IUser[]): Observable<Object> {
    return this.http.post(`${this.url}/api/auth/login`, data)
  
  }
}





 

