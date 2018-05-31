import { Component, OnInit } from '@angular/core';
import { BoardsService } from "../boards.service";


@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  constructor(public boards : BoardsService) { }

  ngOnInit() {
    this.boards.getAllProjects();
  }

  viewProject(project: any){
      this.boards.currentProject = project;
  }
  
}
