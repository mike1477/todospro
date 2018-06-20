import { Component, OnInit } from '@angular/core';
import { ColorThemeService } from "../color-theme.service";
import { BoardsService } from "../boards.service";
import { Location } from '@angular/common';
import { ProgressService } from "../progress.service";

@Component({
  selector: 'app-task-edit',
  templateUrl: './task-edit.component.html',
  styleUrls: ['./task-edit.component.css']
})
export class TaskEditComponent implements OnInit {

  constructor(public board : BoardsService,
              private location: Location,
              public progress : ProgressService) { }

  ngOnInit() {
  }




  np = {
    title: this.board.currentTask.title,
    description: this.board.currentTask.description,
    progress_id: this.board.currentTask.progress_id
  }

  editTask(){
    this.board.editTask(this.np);
  }

  goBack(): void {
    this.location.back();
  }

}
