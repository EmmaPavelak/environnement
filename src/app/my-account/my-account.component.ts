import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users/users.service';
import jwt_decode from "jwt-decode";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.scss']
})
export class MyAccountComponent implements OnInit {

  user:any;
  tokenDecode:any;
  token= localStorage.getItem('token');
  updateForm: FormGroup;  
  submitted = false;
  registerOK = true;

  constructor(private formBuilder: FormBuilder,private userService: UsersService) { 
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
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]], 
      tel: [''], 
      address: ['',Validators.required], 
      birthDate: ['', Validators.required]
    });
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
updateUser(){
  this.userService.updateUser(this.tokenDecode.id,this.updateForm.value).subscribe(
    res => {
      console.log(res);
    },
    err => {
      this.registerOK = false;
      console.log('Error occured:' , err);
    }
  );
}
onSubmit(): void {
  this.submitted = true;
  
    if (this.updateForm.invalid) {
      return;
  }
    console.warn('Your order has been submitted', this.updateForm.value);
    this.updateUser();

    //this.registrationForm.reset();
    //this.router.navigate(['registration-confirm']);
}
 

}
