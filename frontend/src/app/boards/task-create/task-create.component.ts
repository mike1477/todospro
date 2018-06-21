import { Component, OnInit } from '@angular/core';
//import { Project } from "../models";
import { ColorThemeService } from "../color-theme.service";
import { BoardsService } from "../boards.service";
import { Location } from '@angular/common';
import { ProgressService } from "../progress.service";
import { PriorityService } from "../priority.service";

@Component({
  selector: 'app-task-create',
  templateUrl: './task-create.component.html',
  styleUrls: ['./task-create.component.css']
})
export class TaskCreateComponent implements OnInit {

  constructor(public board : BoardsService,
              private location: Location,
              public progress : ProgressService,
              public priority : PriorityService) { }

  ngOnInit() {
  }

  progressInfo = this.progress.progressInfo;
  priorityInfo = this.priority.priorityInfo;

  np = {
    title: '',
    description: '',
    progress_id: 1,
    priority_id: 1
  }


  newTask(){
    this.board.createTask(this.np);
  }

  goBack(): void {
    this.location.back();
  }

}
