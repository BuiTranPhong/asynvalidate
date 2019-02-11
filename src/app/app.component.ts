import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy{
  destroy$: Subject<boolean> = new Subject<boolean>();
  @ViewChild('f') form: NgForm;
  username: string;

  constructor() {

  }
  ngOnInit(){
    this.form.statusChanges.pipe(takeUntil(this.destroy$)).subscribe(status => {
      console.log('cur status:', status);
    }, err => {
    });
  }
  ngOnDestroy(){
    this.destroy$.next();
    this.destroy$.unsubscribe();
  }

  onSubmit(f: NgForm) {
    if (f.valid)
      alert('sucessfull');
    else
      alert('fail');
  }
}
