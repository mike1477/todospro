import { Component, OnInit } from '@angular/core';
import { UsersService } from "../users.service";
import { LoginUser } from "./user";
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private us : UsersService) { }

  ngOnInit() {
  }
  loginUser : LoginUser = {
    username: '',
    password: '',
  }

  login(signin : NgForm){
   this.us.login(signin.value);
  }

}
