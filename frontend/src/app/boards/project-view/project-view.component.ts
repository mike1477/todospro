import { Component, OnInit } from '@angular/core';
import { BoardsService } from "../boards.service";
import { Router } from "@angular/router";
import { ColorThemeService } from "../color-theme.service";

@Component({
  selector: 'app-project-view',
  templateUrl: './project-view.component.html',
  styleUrls: ['./project-view.component.css']
})
export class ProjectViewComponent implements OnInit {

  constructor(public board: BoardsService,
              public route: Router,
              public theme: ColorThemeService) { }

  ngOnInit() {
    this.board.getAllTasks();
  }

   passProject(project:any){
     this.board.currentProject = project;
   }

   areYouSure(){
    this.route.navigate(['/view']);
   }

   viewTask(task){
     this.board.viewTask(task);
   }

   editTask(task){
     this.board.setEdit(task);
   }


}
