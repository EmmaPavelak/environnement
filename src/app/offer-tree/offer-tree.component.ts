import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ITree } from 'src/models/tree.models';
import { TreesService } from '../trees/trees.service';
import jwt_decode from "jwt-decode";
import { UsersService } from '../users/users.service';

@Component({
  selector: 'app-offer-tree',
  templateUrl: './offer-tree.component.html',
  styleUrls: ['./offer-tree.component.scss']
})
export class OfferTreeComponent implements OnInit {

  trees:any;
  onetree:any;
  addTreeForm: FormGroup;
  updateTreeForm: FormGroup;

  submitted = false;
  submittedEdit = false;

  seeAddForm= false;
  seeEditForm= false;

  token=localStorage.getItem('token');
  tokenDecode:any;
  role:any;
  points:any;
  total=0;
  totalpt=0;

  basketArray= new Array();


  constructor(private treeService: TreesService, private formBuilder: FormBuilder, private userService: UsersService) { 
    this.onetree={id: 0, name: "", price: 0, description: ""};

    this.addTreeForm = this.formBuilder.group({
      name: ['', Validators.required],
      price: ['', Validators.required],
      description: ['', Validators.required]
    });
    
    this.updateTreeForm = this.formBuilder.group({
      id: ['', Validators.required],
      name: ['', Validators.required],
      price: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  get f() { return this.addTreeForm.controls; }
  get fe () { return this.updateTreeForm.controls; }

  ngOnInit(): void {
    this.getTrees();

    if(this.token != null){
      this.tokenDecode = jwt_decode(this.token);
      this.role = this.tokenDecode.role; 
      this.points = this.tokenDecode.points;
    }    
  }

  displayAdd(){
    this.seeAddForm= true;
  }
  displayEdit(){
    this.seeEditForm= true;
  }
  getTrees(){
    this.treeService.getAllTrees().subscribe(
      res => {
        this.trees=res;
        console.log(res);
      },
      err => {

        console.log('Error occured:' , err);

      }
    );
  }
  getTreeById(id: number){
    this.treeService.getTreeByID(id).subscribe(data => {
      this.onetree = data;  
      });  
  }
  deleteTree(id:number){
    this.treeService.deleteTree(id).subscribe(
      res => {
        console.log(res);
        location.reload();
      },
      err => {

        console.log('Error occured:' , err);

      }
    );
  }
  editTree(){
    this.submittedEdit = true;
    // stop here if form is invalid
    if (this.updateTreeForm.invalid) {
      return;
  }

  this.treeService.updateTree(this.updateTreeForm.value.id,this.updateTreeForm.value).subscribe(
      res => {
        console.log(res);
      },
      err => {       
        console.log('Error occured:' , err);
      }
    );

    this.addTreeForm.reset();
    location.reload();
  }

  saveTree(){
    this.treeService.createTree(this.addTreeForm.value).subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log('Error occured:' , err);
      }
    );
  
  }

  onSubmit(): void {
    this.submitted = true;
    // stop here if form is invalid
    if (this.addTreeForm.invalid) {
      return;
  }
    console.warn('Your order has been submitted', this.addTreeForm.value);
    this.saveTree();
     this.addTreeForm.reset();
     location.reload();

  }
  addToBasket(){
    this.basketArray.push(this.onetree)
    sessionStorage.setItem('basket',JSON.stringify(this.basketArray));
    this.total+=this.onetree.price;
    this.totalpt+=(this.onetree.price *1.2);
  }
  pay(){
    this.userService.updateUser(this.tokenDecode.id,{id:this.tokenDecode.id,firstname:this.tokenDecode.firstname,lastname:this.tokenDecode.lastname,username:this.tokenDecode.username, email:this.tokenDecode.email,
      password:this.tokenDecode.password,tel:this.tokenDecode.tel,address:this.tokenDecode.address,birthDate:this.tokenDecode.birthDate,role:this.tokenDecode.role,points:this.tokenDecode.points+this.totalpt}).subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log('Error occured:' , err);
      }
    );
    sessionStorage.removeItem('basket');
  }
  refresh(){
    location.reload();
  }
  
}
