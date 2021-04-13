import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ITree } from 'src/models/tree.models';

@Injectable({
  providedIn: 'root'
})
export class TreesService {

  constructor(private http: HttpClient) { }
  url = 'http://localhost:3000/api/tree';

  getAllTrees(): Observable<Object> {
    return this.http.get<Object>(`${this.url}`);
  }
  getTreeByID(id: number): Observable<Object> {
    return this.http.get<Object>(`${this.url}/${id}`);
  }
  createTree(data: ITree[]): Observable<Object> {
    return this.http.post(`${this.url}`, data)  
  }
  updateTree(id: number,data: ITree[]): Observable<Object> {
    return this.http.put(`${this.url}/${id}`, data)  
  }
  deleteTree(id: number){
    return this.http.delete(`${this.url}/${id}`)  
  }
}
