import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/models/user.models';
import { UsersService } from '../users/users.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {

  users: any;

  constructor(private userService: UsersService) { 
  }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(){
    this.userService.getAllUser().subscribe(
      res => {
        this.users=res;
        console.log("ok");
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

  
  }


