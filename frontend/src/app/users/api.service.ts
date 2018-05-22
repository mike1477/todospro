import { Injectable } from '@angular/core';
import { User } from "./user.model";
import { HttpClient, HttpHeaders } from '@angular/common/http';
 
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { FeedbackService } from "../feedback/feedback.service";

import { Router } from "@angular/router";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient,
              private fb : FeedbackService,
              private route : Router) { }

  private loginUrl = "http://localhost/sv/login";

 /** POST: Login in user */
 login (user): Observable<User> {
  return this.http.post<User>(this.loginUrl, user, httpOptions).pipe(
    tap((user: User) => this.fb.addMessage(`Welcome Back ${user.name}`)),
    tap(() => this.route.navigate(['/'])),
    catchError(this.handleError<User>('Login'))
  );

}

/**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
 
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
 
      // Give user feedback
      this.fb.addMessage(`Unable to ${operation}. Please check information and try again.`)
 
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
 

}

