import { Injectable } from '@angular/core';
import { FeedbackService } from "../feedback/feedback.service";
import { ApiService } from "./api.service";
import { UsersService } from "../users/users.service";
import { Router } from "@angular/router";
import { CreateProject, EditProject, AllProjects } from "./models";


@Injectable({
  providedIn: 'root'
})
export class BoardsService{

  constructor(public fb : FeedbackService,
              public api : ApiService,
              public user : UsersService,
              public route : Router) { }


  newProject: CreateProject;    
  updateProject: EditProject;
  currentProject : any; 
  allProjects: AllProjects[];


  returnProjects(){
    return this.allProjects;
  }

  getAllProjects(){
    this.fb.startbar();
    if(this.user.getUser() === undefined){
      this.fb.addMessage("Need to sign in before showing all projects");
      this.route.navigate(['/login']);
      this.fb.donebar();
      return;
    }
    let id = this.user.getUser().id;
   this.fb.addMessage("Fetching All Projects");
   this.api.getAllProjects(id)
    .subscribe(projects => this.allProjects = projects);
   this.fb.donebar();
   this.fb.addMessage("Projects Board");
  }

  createProject(project){
    this.fb.startbar();
    if(this.user.getUser() === undefined){
      this.fb.addMessage("oops , Need to be logged in to create new Projects");
      this.route.navigate(['/login']);
      this.fb.donebar();
      return;
    }

    this.newProject = {
      title: project.title,
      description: project.description,
      color_id: project.color_id,
      user_id : this.user.getUser().id
    }
    this.currentProject = this.newProject;
    this.fb.addMessage("Creating Project");
  
    this.api.createProject(this.newProject)
    .subscribe();
     this.fb.donebar();
  }

  editProject(editProject){
    this.fb.startbar();
    if(this.user.getUser() === undefined){
      this.fb.addMessage("oops , Please login before updating this project");
      this.route.navigate(['/login']);
      this.fb.donebar();
      return;
    }

    this.updateProject = {
      id: editProject.id,
      title: editProject.title,
      description: editProject.description,
      color_id: 0,
    }
    this.fb.addMessage("Editing Project");
    this.currentProject = this.updateProject;
    this.api.updateProject(this.updateProject)
    .subscribe();

     this.fb.donebar();
  }

  deleteProject(deleteProject){
    this.fb.startbar();
    if(this.user.getUser() === undefined){
      this.fb.addMessage("Need to sign in before delete project");
      this.route.navigate(['/login']);
      this.fb.donebar();
      return;
    }
    let id = deleteProject.id;
    this.fb.addMessage("deleting Project");
   
    this.api.deleteProject(id)
     .subscribe();
  
    this.getAllProjects(); 
   this.fb.donebar();
   this.fb.addMessage("Project Delete");
  }
}
