import { Component, OnInit } from '@angular/core';
import { Project } from "../models";
import { ColorThemeService } from "../color-theme.service";

@Component({
  selector: 'app-project-edit',
  templateUrl: './project-edit.component.html',
  styleUrls: ['./project-edit.component.css']
})
export class ProjectEditComponent implements OnInit {

  constructor(public ct: ColorThemeService) { }

  ngOnInit() {
  }

  //Get Project from service
  // np : Project = service.project

  colorThemes = this.ct.colorThemes;
  
  np: Project = {
    color_id : 1,
    title: '',
    description: '',
  }
  editProject(){
    //Send this.Project to service
  }

}
