import { Injectable } from '@angular/core';
import { FeedbackService } from "../feedback/feedback.service";
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { AllProjects, AllTasks} from "../boards/models";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private fb : FeedbackService,
              private http : HttpClient) { }

  private getAllProjectsUrl = "http://localhost/sv/demoproject/"; 
  private getAllTasksUrl = "http://localhost/sv/demotasks/";          

  getAllProjects(id: number): Observable<AllProjects[]> {
    return this.http.get<AllProjects[]>(this.getAllProjectsUrl + id).pipe(
      tap(_ => this.fb.donebar()),
      tap(_ => this.fb.addMessage("Projects board")),
      catchError(this.fb.handleError('get projects'))
    );

  }

  getAllTasks(id: number): Observable<AllTasks[]> {
    return this.http.get<AllTasks[]>(this.getAllTasksUrl + id);

  }

}
