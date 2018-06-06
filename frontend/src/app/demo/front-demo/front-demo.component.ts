import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { DemoService } from '../demo.service';
import { ColorThemeService } from "../../boards/color-theme.service";

@Component({
  selector: 'app-front-demo',
  templateUrl: './front-demo.component.html',
  styleUrls: ['./front-demo.component.css']
})
export class FrontDemoComponent implements OnInit {

  constructor(private route : Router,
              public ds : DemoService,
              public theme : ColorThemeService) { }

  ngOnInit() {
    this.ds.getDemoPojects();
    
  }

  

  goToRegister(){
    this.route.navigate(['/register'])
  }

  setProject(project){
    this.ds.currentProject = project;
    this.ds.getAllTasks();
  }

}
