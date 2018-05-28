import { Component, OnInit } from '@angular/core';
import { UsersService } from "../users.service";
import{ NgForm } from '@angular/forms';
import { NewUser } from "./user";


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private us: UsersService) { }

  ngOnInit() {
  }
 newUser : NewUser = {
   username: '',
   name : '',
   password: '',
   password2: ''
 }

  register(newUser: NgForm):void{
    this.us.register(newUser.value);  
  }
}
