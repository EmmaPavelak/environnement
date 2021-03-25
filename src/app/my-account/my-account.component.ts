import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users/users.service';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.scss']
})
export class MyAccountComponent implements OnInit {

  user:any;

  constructor(private userService: UsersService) { }

  ngOnInit(): void {
    this.getUserById(1);
  }
  getUserById(id: number){
    this.userService.getUserByID(id).subscribe(data => {
      console.log(data);
      this.user = data;  
      });  
  }
update(){
  /*this.userService.updateUser(1,this.updateForm.value).subscribe(
    res => {
      console.log(res);
      //this.toastr.success('Votre compte a été créer avec succès.', 'Success');
      //this.router.navigate(['registration-confirm']);
    },
    err => {
      this.registerOK = false;
      console.log('Error occured:' , err);
     // this.toastr.error(err.message, 'Error occured');
    }
  );*/
}
 

}
