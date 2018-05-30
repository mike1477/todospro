import { Component, OnInit } from '@angular/core';
import { Project } from "../models";

@Component({
  selector: 'app-project-edit',
  templateUrl: './project-edit.component.html',
  styleUrls: ['./project-edit.component.css']
})
export class ProjectEditComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  //Get Project from service
  // np : Project = service.project
  
  np: Project = {
    title: 'test',
    description: 'test',
    theme_color: 'info'
  }

  editProject(){
    //Send this.Project to service
  }

}
