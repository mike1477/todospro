import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { BoardsService } from "../boards.service";

@Component({
  selector: 'app-deleted',
  templateUrl: './deleted.component.html',
  styleUrls: ['./deleted.component.css']
})
export class DeletedComponent implements OnInit {

  constructor(public route: Router,
              public board: BoardsService) { }

  ngOnInit() {
    this.board.success = false;
  }


}
