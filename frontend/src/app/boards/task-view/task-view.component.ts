import { Component, OnInit } from '@angular/core';
import { BoardsService } from "../boards.service";
import { ColorThemeService } from "../color-theme.service";
import { ProgressService } from "../progress.service";
import { PriorityService } from "../priority.service";

@Component({
  selector: 'app-task-view',
  templateUrl: './task-view.component.html',
  styleUrls: ['./task-view.component.css']
})
export class TaskViewComponent implements OnInit {

  constructor(public board: BoardsService,
               public theme: ColorThemeService,
               public progress : ProgressService,
               public priority : PriorityService) { }

  ngOnInit() {
  }

viewProject(project){
  this.board.viewProject(project);
}


editTask(task){
  this.board.setEdit(task);
}


}
