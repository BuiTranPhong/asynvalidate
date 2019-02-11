import {Directive, Attribute, ElementRef} from '@angular/core';
import {Observable} from 'rxjs';

import {
  NG_ASYNC_VALIDATORS,
  AbstractControl,
  ValidationErrors,
  AsyncValidator,
} from '@angular/forms';
import 'rxjs/add/observable/timer';
import {first, map, switchMap} from 'rxjs/operators';

@Directive({
  selector: '[app-check][ngModel]',
  providers: [
    {
      provide: NG_ASYNC_VALIDATORS,
      useExisting: DemoValidator, multi: true
    }
  ]
})
export class DemoValidator implements AsyncValidator {

  constructor() {}

  validate(control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
      return new Observable(observer => {
        setTimeout(() => {
          observer.next(null);
          observer.complete();
          observer.unsubscribe();
        }, 1000);
      });
  }

}
