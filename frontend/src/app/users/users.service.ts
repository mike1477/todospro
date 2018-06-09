import { Injectable } from '@angular/core';
import { FeedbackService } from "../feedback/feedback.service";
import { ApiService } from "./api.service";
import { User } from "./user.model";
import { LoggedInService } from "../auth/logged-in.service";
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(public fb: FeedbackService,
              private api: ApiService,
              private auth: LoggedInService,
              private route: Router) { }

  private user : User;

  login(userInfo){
     this.fb.startbar();
     this.fb.addMessage("Authenticating Information");    
     this.api.login(userInfo)
     .subscribe(user => this.user = user);   
  }

  register(newUserInfo){
     this.fb.startbar();
     this.fb.addMessage("Creating new profile for " + newUserInfo.username);
     this.api.register(newUserInfo)
     .subscribe();
  }

  editUser(editUser){
    this.fb.startbar();
    this.fb.addMessage("Checking Form Information");
    this.api.updateUser(editUser)
     .subscribe();
  }

  logout(){
    this.fb.startbar();
    this.fb.addMessage("You are logged out");
    this.user = null;
    localStorage.removeItem('token');
    this.auth.setlogged(false);
    this.route.navigate(['/login']);
    this.fb.donebar();
  }

  getUser(){
    
    return this.user;
  }

}
