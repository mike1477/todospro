import { Injectable } from '@angular/core';
import { User } from "./user.model";
import { Status } from "./status.model";
import { HttpClient, HttpHeaders } from '@angular/common/http';
 
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { FeedbackService } from "../feedback/feedback.service";
import { LoggedInService } from "./logged-in.service";

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
              private route : Router,
              private auth : LoggedInService) { }

  private loginUrl    = "http://localhost/sv/login";
  private registerUrl = "http://localhost/sv/register";
  private updateUrl   = "http://localhost/sv/updateuser";

 /** POST: Login user */
 login (user): Observable<User> {
  return this.http.post<User>(this.loginUrl, user, httpOptions).pipe(
    tap((user: User) => this.fb.addMessage(`Welcome Back ${user.name}`)),
    tap(() => this.route.navigate(['/'])),
    tap(() => this.auth.setlogged(true)),
    catchError(this.handleError<User>('Login'))
  );
}

 /** POST: Register new user */
 register (newuser): Observable<Status> {
  return this.http.post<Status>(this.registerUrl, newuser, httpOptions).pipe(
    tap((user: Status) => this.fb.addMessage(`You created a new account`)),
    tap(() => this.route.navigate(['/login'])),
    catchError(this.handleError<Status>('Register new user'))
  );
}

/** PUT: update user */
updateUser (updatedUser): Observable<any> {
  return this.http.put(this.updateUrl, updatedUser, httpOptions).pipe(
    tap(() => this.fb.addMessage(`You updated your account`)),
    tap(() => this.route.navigate(['/login'])),
    catchError(this.handleError<any>('update'))
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

