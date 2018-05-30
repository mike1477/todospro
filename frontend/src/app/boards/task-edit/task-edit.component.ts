import { Component, OnInit } from '@angular/core';
import { Project } from "../models";

@Component({
  selector: 'app-task-edit',
  templateUrl: './task-edit.component.html',
  styleUrls: ['./task-edit.component.css']
})
export class TaskEditComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  //Get Task from service
  // np : Task = service.task
  
  np: Project = {
    title: 'test',
    description: 'test',
    theme_color: 'info'
  }

  editProject(){
    //Send this.task to service
  }

}
