import { Component, OnInit } from '@angular/core';
import { BoardsService } from "../boards.service";

@Component({
  selector: 'app-project-view',
  templateUrl: './project-view.component.html',
  styleUrls: ['./project-view.component.css']
})
export class ProjectViewComponent implements OnInit {

  constructor(private project: BoardsService) { }

  ngOnInit() {
 
  }

   passProject(project:any){
     this.project.currentProject = project;
   }

   deleteProject(project:any){
    this.project.currentProject = null;
    this.project.deleteProject(project);
   }


}
