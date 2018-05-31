import { Component, OnInit } from '@angular/core';
import { Project } from "../models";
import { ColorThemeService } from "../color-theme.service";
import { BoardsService } from "../boards.service";

@Component({
  selector: 'app-project-create',
  templateUrl: './project-create.component.html',
  styleUrls: ['./project-create.component.css']
})
export class ProjectCreateComponent implements OnInit {

  constructor(public ct: ColorThemeService,
              public bs : BoardsService) { }

  ngOnInit() {
  }
  
  colorThemes = this.ct.colorThemes;

  np: Project = {
    id: 1,
    color_id : 1,
    title: '',
    description: '',
  }
  
  newProject(){
    this.bs.createProject(this.np);
  }

}
