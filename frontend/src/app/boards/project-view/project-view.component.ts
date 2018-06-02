import { Component, OnInit } from '@angular/core';
import { BoardsService } from "../boards.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-project-view',
  templateUrl: './project-view.component.html',
  styleUrls: ['./project-view.component.css']
})
export class ProjectViewComponent implements OnInit {

  constructor(private board: BoardsService,
              public route: Router) { }

  ngOnInit() {
    this.board.getAllTasks();
  }


   passProject(project:any){
     this.board.currentProject = project;
   }

   areYouSure(){
    this.route.navigate(['/view']);
   }

   passTask(task){
     this.board.currentTask = task;
   }


}
