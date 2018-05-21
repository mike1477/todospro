import { Component, OnInit } from '@angular/core';
import { UsersService } from "../users.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private us : UsersService) { }

  ngOnInit() {
  }
  private username: string;
  private password: string;

  login(){
    let sentInfo = {
      username : this.username,
      password : this.password
    }
   this.us.login(sentInfo);

  }

}
