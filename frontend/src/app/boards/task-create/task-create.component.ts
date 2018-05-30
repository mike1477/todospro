import { Component, OnInit } from '@angular/core';
import { Project } from "../models";
import { ColorThemeService } from "../color-theme.service";

@Component({
  selector: 'app-task-create',
  templateUrl: './task-create.component.html',
  styleUrls: ['./task-create.component.css']
})
export class TaskCreateComponent implements OnInit {

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
  }

}
