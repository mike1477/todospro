import { Directive } from '@angular/core';
import { AsyncValidator, AbstractControl, ValidationErrors, NG_ASYNC_VALIDATORS } from "@angular/forms";
import { ApiService } from "./api.service";
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';



@Directive({
  selector: '[uniqueUsername]',
  providers: [{
    provide: NG_ASYNC_VALIDATORS,
    useExisting: UsernameExistsDirective,
    multi: true
  }]
})
export class UsernameExistsDirective implements AsyncValidator{ 



  constructor(public http: ApiService) { }



  validate(control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null>{

       return this.http.usernameChecker(control.value).pipe(
         map(rt =>{
           return rt.result == true ? {'uniqueUsername' : true}:null;
         })
       );
   }

}
