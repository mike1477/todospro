import { Component, OnInit } from '@angular/core';
import { Project } from "../models";
import { ColorThemeService } from "../color-theme.service";
import { BoardsService } from "../boards.service";
import { Location } from '@angular/common';

@Component({
  selector: 'app-project-edit',
  templateUrl: './project-edit.component.html',
  styleUrls: ['./project-edit.component.css']
})
export class ProjectEditComponent implements OnInit {

  constructor(public ct: ColorThemeService,
              public bs: BoardsService,
              private location: Location) { }

  ngOnInit() {
  }


  colorThemes = this.ct.colorThemes;
  
  np: Project = {
    id : this.bs.currentProject.id,
    title: this.bs.currentProject.title,
    description: this.bs.currentProject.description,
    color_id : this.bs.currentProject.color_id,
  }

  editProject(){
    this.bs.editProject(this.np);
  }

  goBack(): void {
    this.location.back();
  }

}
