import { Directive , Input} from '@angular/core';
import { Validator, AbstractControl, NG_VALIDATORS } from "@angular/forms";

@Directive({
  selector: '[passwordsMatch]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: PasswordsMatchDirective,
    multi: true
  }]
})
export class PasswordsMatchDirective implements Validator{

  @Input() passwordsMatch: string;

  validate(control: AbstractControl): {[key:string]: any} | null{
     const controlToCompare = control.parent.get(this.passwordsMatch);
     if(controlToCompare && controlToCompare.value !== control.value){
        return {'notEqual' : true}
     }
     return null;
  }

  constructor() { }

}
