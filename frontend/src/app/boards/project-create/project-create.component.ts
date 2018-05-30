import { Component, OnInit } from '@angular/core';
import { Project } from "../models";

@Component({
  selector: 'app-project-create',
  templateUrl: './project-create.component.html',
  styleUrls: ['./project-create.component.css']
})
export class ProjectCreateComponent implements OnInit {

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
