import { Component, OnInit } from '@angular/core';
import { Project } from "../models";
import { ColorThemeService } from "../color-theme.service";

@Component({
  selector: 'app-task-edit',
  templateUrl: './task-edit.component.html',
  styleUrls: ['./task-edit.component.css']
})
export class TaskEditComponent implements OnInit {

  constructor(public ct: ColorThemeService) { }

  ngOnInit() {
  }

  //Get Task from service
  // np : Task = service.task
  
  colorThemes = this.ct.colorThemes;



  np: Project = {
    id: 1,
    color_id : 1,
    title: '',
    description: '',
  }

  editProject(){
    //Send this.task to service
  }

}
