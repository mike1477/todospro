import { Component, OnInit } from '@angular/core';
import { ColorThemeService } from "../color-theme.service";
import { BoardsService } from "../boards.service";
import { Location } from '@angular/common';

@Component({
  selector: 'app-task-edit',
  templateUrl: './task-edit.component.html',
  styleUrls: ['./task-edit.component.css']
})
export class TaskEditComponent implements OnInit {

  constructor(public board : BoardsService,
              private location: Location) { }

  ngOnInit() {
  }




  np = {
    title: this.board.currentTask.title,
    description: this.board.currentTask.description,
  }

  editTask(){
    this.board.editTask(this.np);
  }

  goBack(): void {
    this.location.back();
  }

}
