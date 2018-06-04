import { Injectable } from '@angular/core';
import { NgProgress } from '@ngx-progressbar/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  constructor(public progress: NgProgress) { }

  public message : string = "Why do it today when you can do it tomorrow?";

  addMessage(message : string){
    this.message = message;
  }

  startbar(){
    this.progress.start();
  }

  donebar(){
    this.progress.complete();
  }

  setback(length: number){
    this.progress.set(length);
  }

  jump(length: number){
    this.progress.inc(length);
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  public handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
 
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
 
      // Give user feedback
      this.addMessage(`Unable to ${operation}. Please try again later.`);
      this.donebar();
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
