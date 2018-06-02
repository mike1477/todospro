import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Router } from "@angular/router";

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { AllProjects, CreateProject, EditProject, NewTask, AllTasks, UpdateTask } from "./models";
import { FeedbackService } from "../feedback/feedback.service";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient,
              public route : Router,
              public fb : FeedbackService) { }

  private getAllProjectsUrl = "http://localhost/sv/project/";
  private createProjectUrl = "http://localhost/sv/createproject";
  private editProjectUrl = "http://localhost/sv/updateproject";
  private deleteProjectUrl = "http://localhost/sv/deleteproject/";
  private createTaskUrl = "http://localhost/sv/createtask";
  private getAllTasksUrl = "http://localhost/sv/tasks/";
  private editTasksUrl = "http://localhost/sv/updatetask";
  private deleteTaskUrl = "http://localhost/sv/deletetask/";
  private  deleteAllTaskUrl = "http://localhost/sv/deletealltasks/";

  getAllProjects(id: number): Observable<AllProjects[]> {
    return this.http.get<AllProjects[]>(this.getAllProjectsUrl + id);

  }

  createProject(newProject: CreateProject): Observable<any>{
    return this.http.post(this.createProjectUrl, newProject, httpOptions).pipe(
      tap(_ => this.route.navigate(['/view']))
    )
  }

  updateProject(updateProject: EditProject): Observable<any>{
    return this.http.put(this.editProjectUrl, updateProject, httpOptions).pipe(
      tap(_ => this.route.navigate(['/view']))
    )
  }

  deleteProject(id:number): Observable<any>{
    return this.http.delete(this.deleteProjectUrl + id);
  }

  createTask(newTask: NewTask): Observable<any>{
    return this.http.post(this.createTaskUrl, newTask, httpOptions).pipe(
      tap(_ => this.route.navigate(['/view']))
    )
  }

  getAllTasks(id: number): Observable<AllTasks[]> {
    return this.http.get<AllTasks[]>(this.getAllTasksUrl + id);

  }

  updateTask(editTask: UpdateTask): Observable<any>{
    return this.http.put(this.editTasksUrl, editTask, httpOptions).pipe(
      tap(_ => this.route.navigate(['/view']))
    )
  }

  deleteTask(id:number): Observable<any>{
    return this.http.delete(this.deleteTaskUrl + id);
  }

  deleteAllTask(project_id :number){
    return this.http.delete(this.deleteAllTaskUrl + project_id);
  }
}
