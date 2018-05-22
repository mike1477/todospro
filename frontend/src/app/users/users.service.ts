import { Injectable } from '@angular/core';
import { FeedbackService } from "../feedback/feedback.service";
import { ApiService } from "./api.service";
import { User } from "./user.model";
import { LoggedInService } from "./logged-in.service";
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
     //Start loader
     this.fb.addMessage("Authenticating Information");
     
     this.api.login(userInfo)
     .subscribe(user => this.user = user);

     //Stop loader
    
  }

  register(newUserInfo){
     //Start loader
     this.fb.addMessage("Checking Form Information");

     this.api.register(newUserInfo)
     .subscribe();

  }

  editUser(editUser){
    //Start loader
    // if(this.user === undefined){
    //   this.fb.addMessage("Please sign in to update account");
    //   return;
    // }
    // if(editUser.password != editUser.password2){
    //   this.fb.addMessage("Passwords don't match");
    //   return;
    // }
    let updateUser = {
      id: this.user.id,
      name: editUser.name,
      password: editUser.password
    }
    this.fb.addMessage("Checking Form Information");

    this.api.updateUser(updateUser)
     .subscribe();
  }

  logout(){
    this.fb.addMessage("You are logged out");
    this.user = null;
    this.auth.setlogged(false);
    this.route.navigate(['/login']);
  }

}
