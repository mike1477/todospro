import { Component, OnInit } from '@angular/core';
import { LoggedInService } from "../users/logged-in.service";
import { UsersService } from "../users/users.service";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private auth: LoggedInService,
              private user: UsersService) { }

  ngOnInit() {
    
  }

  logout(){
    this.user.logout();
  }

}
