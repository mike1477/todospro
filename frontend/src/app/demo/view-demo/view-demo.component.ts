import { Component, OnInit } from '@angular/core';
import { DemoService } from "../demo.service";
import { ColorThemeService } from "../../boards/color-theme.service";

@Component({
  selector: 'app-view-demo',
  templateUrl: './view-demo.component.html',
  styleUrls: ['./view-demo.component.css']
})
export class ViewDemoComponent implements OnInit {

  constructor(public ds : DemoService,
             public theme : ColorThemeService) { }

  ngOnInit() {
  }

}
