import { Component, OnInit } from '@angular/core';
import { LoggedInService } from "../auth/logged-in.service";
import { UsersService } from "../users/users.service";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public auth: LoggedInService,
              private user: UsersService) { }

  ngOnInit() {
    
  }

  logout(){
    this.user.logout();
  }

}
