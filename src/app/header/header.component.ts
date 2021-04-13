import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/models/user.models';
import { UsersService } from '../users/users.service';
import jwt_decode from "jwt-decode";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  token= localStorage.getItem('token');
  user:any;
  tokenDecode:any;

  constructor(private userService: UsersService) { 
    this.user={
    id: 0,
    address: "",
    birthDate:new Date(),
    email: "",
    firstname: "",    
    lastname: "",
    password: "",
    tel: 0,
    username: ""}
  }

  ngOnInit(): void {
    
    if(this.token != null){
      this.tokenDecode = jwt_decode(this.token); 
      this.getUserById(this.tokenDecode.id);
    }
  
  }
  getUserById(id: number){
    this.userService.getUserByID(id).subscribe(data => {
      this.user = data;  
      });  
  }
  
  logout(){
    console.log("bye");
    localStorage.removeItem('token');
  }
  
}
