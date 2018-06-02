import { Component, OnInit } from '@angular/core';
import { BoardsService } from "../boards.service";

@Component({
  selector: 'app-task-view',
  templateUrl: './task-view.component.html',
  styleUrls: ['./task-view.component.css']
})
export class TaskViewComponent implements OnInit {

  constructor(private board: BoardsService) { }

  ngOnInit() {
  }

}
