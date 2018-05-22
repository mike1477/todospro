import { Component, OnInit } from '@angular/core';
import { FeedbackService } from "../feedback.service";

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  constructor(public fb : FeedbackService) { }
  

  ngOnInit() {
   
  }



}
