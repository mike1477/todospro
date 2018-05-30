import { Component, OnInit } from '@angular/core';
import { Project } from "../models";

@Component({
  selector: 'app-task-create',
  templateUrl: './task-create.component.html',
  styleUrls: ['./task-create.component.css']
})
export class TaskCreateComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  np: Project = {
    title: '',
    description: '',
    theme_color: 'primary'
  }

  newProject(){
    //Send this.NewProject to service
  }

}
