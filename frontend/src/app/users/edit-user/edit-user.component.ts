import { Component, OnInit } from '@angular/core';
import { UsersService } from "../users.service";

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  constructor(private us: UsersService) { }

  ngOnInit() {
  }
  
  private name : string;
  private password : string;
  private password2 : string;

  editUser(){
    
    let updatedInfo = {
      name : this.name,
      password: this.password,
      password2 : this.password2
    }

    this.us.editUser(updatedInfo);
  }
}
