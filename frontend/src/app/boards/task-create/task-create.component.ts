import { Component, OnInit } from '@angular/core';
//import { Project } from "../models";
import { ColorThemeService } from "../color-theme.service";
import { BoardsService } from "../boards.service";

@Component({
  selector: 'app-task-create',
  templateUrl: './task-create.component.html',
  styleUrls: ['./task-create.component.css']
})
export class TaskCreateComponent implements OnInit {

  constructor(public board : BoardsService) { }

  ngOnInit() {
  }



  np = {
    title: '',
    description: '',
  }


  newTask(){
    this.board.createTask(this.np);
  }

}
