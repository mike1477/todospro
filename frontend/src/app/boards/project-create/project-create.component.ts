import { Component, OnInit } from '@angular/core';
import { Project } from "../models";
import { ColorThemeService } from "../color-theme.service";

@Component({
  selector: 'app-project-create',
  templateUrl: './project-create.component.html',
  styleUrls: ['./project-create.component.css']
})
export class ProjectCreateComponent implements OnInit {

  constructor(public ct: ColorThemeService) { }

  ngOnInit() {
  }
  
  colorThemes = this.ct.colorThemes;



  np: Project = {
    color_id : 1,
    title: '',
    description: '',
  }

  newProject(){
    //Send this.NewProject to service
    console.log(this.colorThemes);
  }

}
