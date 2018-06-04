import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { BoardsService } from "../boards.service";
import { ApiService } from "../api.service";

@Component({
  selector: 'app-deleted',
  templateUrl: './deleted.component.html',
  styleUrls: ['./deleted.component.css']
})
export class DeletedComponent implements OnInit {

  constructor(public route: Router,
              public board: BoardsService,
              public api : ApiService) { }

  ngOnInit() {
    this.api.success = false;
  }


}
