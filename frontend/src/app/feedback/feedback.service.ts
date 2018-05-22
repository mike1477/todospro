import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  constructor() { }

  public message : string = "Why do it today when you can do it tomorrow?";

  addMessage(message : string){
    this.message = message;
  }
}
