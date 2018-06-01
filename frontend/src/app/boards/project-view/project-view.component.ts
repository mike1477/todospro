import { Component, OnInit } from '@angular/core';
import { BoardsService } from "../boards.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-project-view',
  templateUrl: './project-view.component.html',
  styleUrls: ['./project-view.component.css']
})
export class ProjectViewComponent implements OnInit {

  constructor(private project: BoardsService,
              public route: Router) { }

  ngOnInit() {
 
  }

   passProject(project:any){
     this.project.currentProject = project;
   }

   areYouSure(){
    this.route.navigate(['/view']);
   }


}
