import { Component, OnInit } from '@angular/core';
import { UsersService } from "../users.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private us: UsersService) { }

  ngOnInit() {
  }
  private username: string;
  private name: string;
  private password: string;
  private password2: string;

  register(){
    
    let sentInfo = {
     username : this.username,
     name : this.name,
     password : this.password,
     password2 : this.password2
    }

    this.us.register(sentInfo);
  }
  
}
