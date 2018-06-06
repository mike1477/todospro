import { Component, OnInit } from '@angular/core';
import { DemoService } from "../demo.service";
import { ColorThemeService } from "../../boards/color-theme.service";

@Component({
  selector: 'app-view-demo',
  templateUrl: './view-demo.component.html',
  styleUrls: ['./view-demo.component.css']
})
export class ViewDemoComponent implements OnInit {

  constructor(private ds : DemoService,
             private theme : ColorThemeService) { }

  ngOnInit() {
  }

}
