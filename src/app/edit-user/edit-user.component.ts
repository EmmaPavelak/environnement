import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IUser } from 'src/models/user.models';
import { UsersService } from '../users/users.service';
import jwt_decode from "jwt-decode";

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {

  users: any;
  user:any;
  tokenDecode:any;
  token= localStorage.getItem('token');
  updateForm: FormGroup;  
  submitted = false;
  registerOK = true;
  id:number=0;

  constructor(private userService: UsersService, private formBuilder: FormBuilder) { 
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
      
    this.updateForm = this.formBuilder.group({
      id: ['', Validators.required],
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      email: ['', [Validators.required, Validators.email]], 
      tel: [''], 
      address: ['',Validators.required], 
      birthDate: ['', Validators.required],
      role: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.getUsers();

    if(this.token != null){
      this.tokenDecode = jwt_decode(this.token); 
      this.id=this.tokenDecode.id;
      this.getUserById(this.id);
    }
    console.log(this.id);
  }

  getUsers(){
    this.userService.getAllUser().subscribe(
      res => {
        this.users=res;
        console.log(res);
      },
      err => {
        console.log('Error occured:' , err);

      }
    );
  }
  deleteUser(id:number){
    this.userService.deleteUser(id).subscribe(
      res => {
        console.log(res);
        location.reload();
      },
      err => {

        console.log('Error occured:' , err);

      }
    );
  }

  




  get f() { return this.updateForm.controls; }


  getUserById(id: number){
    this.userService.getUserByID(id).subscribe(data => {
      this.user = data;  
      });  
  }
updateUser(){
  this.userService.updateUser(this.tokenDecode.id,this.updateForm.value).subscribe(
    res => {
      console.log(res);
      location.reload();
    },
    err => {
      this.registerOK = false;
      console.log('Error occured:' , err);
    }
  );
}
onSubmit(): void {
  this.submitted = true;
  console.log(this.updateForm.value);
  
   // stop here if form is invalid
   if (this.updateForm.invalid) {
    return;
}
    this.updateUser();
    this.submitted = true;

}
 
  
  }


