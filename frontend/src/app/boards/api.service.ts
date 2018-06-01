import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Router } from "@angular/router";

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { AllProjects, CreateProject, EditProject } from "./models";
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

  getAllProjectsUrl = "http://localhost/sv/project/";
  createProjectUrl = "http://localhost/sv/createproject";
  editProjectUrl = "http://localhost/sv/updateproject";
  deleteProjectUrl = "http://localhost/sv/deleteproject/";

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
}
