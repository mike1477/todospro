import { Injectable } from '@angular/core';
import { NgProgress } from '@ngx-progressbar/core';


@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  constructor(public progress: NgProgress) { }

  public message : string = "Why do it today when you can do it tomorrow?";

  addMessage(message : string){
    this.message = message;
  }

  startbar(){
    this.progress.start();
  }

  donebar(){
    this.progress.complete();
  }

  setback(length: number){
    this.progress.set(length);
  }

  jump(length: number){
    this.progress.inc(length);
  }

}
