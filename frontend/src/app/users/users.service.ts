import { Injectable } from '@angular/core';
import { FeedbackService } from "../feedback/feedback.service";
import { ApiService } from "./api.service";
import { User } from "./user.model";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(public fb: FeedbackService,
              private api: ApiService) { }

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

    //Give user feedback

    //Make http call
  }

  editUser(editUser){
    //Start loader
    this.fb.addMessage("Checking Form Information");

    //Give user feedback

    //Make http call
  }


}
