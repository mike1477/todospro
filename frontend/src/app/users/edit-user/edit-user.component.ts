import { Component, OnInit } from '@angular/core';
import { UsersService } from "../users.service";
import { User, EditUser } from "./user";
import{ NgForm } from '@angular/forms';
import { LoggedInService } from "../../auth/logged-in.service";
import { Router } from "@angular/router";


@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  constructor(private us: UsersService,
              private auth : LoggedInService,
              private route : Router) { }

  ngOnInit() {
  
  this.currentUser = this.us.getUser();
  this.checkIfLoggedIn();
  }
  public currentUser;
  public updatedUser : User;

  user : EditUser = {
    password: '',
    password2: '',
    name: ''
}

 checkIfLoggedIn(){
   if(this.auth.getLogged()){
    this.user.name = this.currentUser.name;
   }else{
    this.route.navigate(['/login'])
   }
 }
  

  saveEdit(editUser: NgForm):void{
    
    this.updatedUser = {
      id : this.currentUser.id,
      username : this.currentUser.username,
      name : this.user.name,
      password : this.user.password,
     }
     this.us.editUser(this.updatedUser);
  }
}
