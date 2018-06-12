import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggedInService {

  constructor() { }

  public loggedIn: boolean = false;

  setlogged(bool:boolean) {
    this.loggedIn = bool;
  }

  getLogged(){
    return this.loggedIn;
  }
}
