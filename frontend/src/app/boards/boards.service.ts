import { Injectable } from '@angular/core';
import { FeedbackService } from "../feedback/feedback.service";
import { ApiService } from "./api.service";
import { UsersService } from "../users/users.service";
import { Router } from "@angular/router";
import { CreateProject, EditProject, AllProjects, NewTask, AllTasks, UpdateTask } from "./models";


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
  currentTask : any;
  newTask : NewTask;
  allTasks : AllTasks[];
  updateTask : UpdateTask;

  returnProjects(){
    return this.allProjects;
  }

  viewProject(project){
    this.currentProject = project;
    this.fb.addMessage("Currently viewing : " + this.currentProject.title);
  }

  viewTask(task){
    this.currentTask = task;
    this.fb.addMessage("Currently viewing : " + this.currentTask.title);
  }

  setEdit(task){
    this.currentTask = task;
    this.fb.addMessage("Edit TODO : " + this.currentTask.title);
  }

  getAllProjects(){
    this.fb.startbar();
  
    let id = this.user.getUser().id;
   this.fb.addMessage("Fetching All Projects");
   this.api.getAllProjects(id)
    .subscribe(projects => this.allProjects = projects);
  }

  createProject(project){
    this.fb.startbar();
    
    this.newProject = {
      title: project.title,
      description: project.description,
      color_id: project.color_id,
      user_id : this.user.getUser().id
    }
    this.currentProject = this.newProject;
    this.fb.addMessage("Creating Project");
  
    this.api.createProject(this.newProject)
    .subscribe(project => this.currentProject = project);
     
  }

  editProject(editProject){
    this.fb.startbar();

    this.updateProject = {
      id: editProject.id,
      title: editProject.title,
      description: editProject.description,
      color_id: editProject.color_id,
    }
    this.fb.addMessage("Editing Project");
    this.currentProject = this.updateProject;
    this.api.updateProject(this.updateProject)
    .subscribe();
  }

  deleteProject(){
    this.fb.startbar();
  

    let id = this.currentProject.id;
    this.fb.addMessage("Deleting Project ...");

    this.api.deleteAllTask(id)
     .subscribe();
   
    this.api.deleteProject(id)
     .subscribe();
  
   
  }

  createTask(newTask){
    this.fb.startbar();

    if(this.currentProject === undefined){
      this.fb.addMessage("Select project to add task");
      this.route.navigate(['/overview']);
      this.fb.donebar();
      return;
    }

    let project_id = this.currentProject.id;
 
    this.newTask= {
      title: newTask.title,
      description: newTask.description,
      project_id: project_id
    }
    this.currentTask = this.newTask;
    this.fb.addMessage("Creating Task");
  
    this.api.createTask(this.newTask)
    .subscribe();

  }

  getAllTasks(){

    this.fb.startbar();

    if(this.currentProject === undefined){
      this.route.navigate(['/overview']);
      this.fb.donebar();
      return;
    }

    let project_id = this.currentProject.id;

    this.api.getAllTasks(project_id)
    .subscribe(tasks => this.allTasks = tasks);
    this.fb.donebar();

  }

  editTask(updateTask){
    this.fb.startbar();

    this.updateTask = {
      id: this.currentTask.id,
      title: updateTask.title,
      description: updateTask.description
    }
    this.fb.addMessage("Editing Task ...");

    this.api.updateTask(this.updateTask)
    .subscribe();

  }

  deleteTask(task){
    this.fb.startbar();

    let id = task.id;
    this.fb.addMessage("Deleting Task");
   
    this.api.deleteTask(id)
     .subscribe();
  
  }


}
