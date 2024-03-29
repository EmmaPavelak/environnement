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

  getAllUser(): Observable<Object> {
    return this.http.get<Object>(`${this.url}/api/auth/users`); 
  }
  getUserByID(id: number): Observable<Object> {
    return this.http.get<Object>(`${this.url}/api/auth/users/${id}`);
  }
  createUser(data: IUser[]): Observable<Object> {
    return this.http.post(`${this.url}/api/auth/registration`, data)  
  }
  loginUser(data: IUser[]){
    return new Promise((resolve, reject) => { this.http.post(`${this.url}/api/auth/login`, data).subscribe(
      res => {
        const token= Object.values(res)[0].toString();
        localStorage.setItem('token', token);  
  
        resolve(token);
      },
      (error) => {
        reject(error);
      }
      );
    });  
    
  }

  logout() {
    localStorage.removeItem('token');    
    location.reload();
  }

  updateUser(id: number,data: IUser): Observable<Object> {
    return this.http.put(`${this.url}/api/auth/${id}`, data)  
  }
  deleteUser(id: number){
    return this.http.delete(`${this.url}/api/auth/${id}`)  
  }
}





 

