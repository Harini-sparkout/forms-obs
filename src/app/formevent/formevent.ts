import { AsyncPipe } from '@angular/common';
import { Component, ViewChild, ElementRef } from '@angular/core';
import { fromEvent, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-formevent',
  imports: [AsyncPipe],
  templateUrl: './formevent.html',
  styleUrl: './formevent.css',
})
export class Formevent {
       @ViewChild('myInput') myInput!: ElementRef;
       inputValues!: Observable<string>;
       createObservable(){
        this.inputValues=fromEvent(this.myInput.nativeElement,'input').pipe(map((event:any)=>event.target.value));
       }

}
