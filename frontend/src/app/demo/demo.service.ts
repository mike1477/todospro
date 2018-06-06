import { Injectable } from '@angular/core';
import { ApiService } from "../boards/api.service";
import { FeedbackService } from "../feedback/feedback.service";
import { AllProjects, AllTasks } from "../boards/models";

@Injectable({
  providedIn: 'root'
})
export class DemoService {

  constructor(private api: ApiService,
              public fb: FeedbackService) { }

  private demoId : number = 22;
  allProjects : AllProjects[];
  currentProject : any;
  allTasks : AllTasks[];


  getDemoPojects(){
    this.fb.startbar();
    this.fb.addMessage("Fetching All Projects");
    this.api.getAllProjects(this.demoId)
    .subscribe(projects => this.allProjects = projects);
  }
 
  getAllTasks(){
    let project_id = this.currentProject.id;
    this.api.getAllTasks(project_id)
    .subscribe(tasks => this.allTasks = tasks);

  }
  
}
