import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { BehaviorSubject} from 'rxjs';
@Component({
  selector: 'app-behaviour',
  imports: [AsyncPipe],
  templateUrl: './behaviour.html',
  styleUrl: './behaviour.css',
})
export class Behaviour {
   name = new BehaviorSubject<string>('hello');
   changeName(event: any){
    this.name.next(event.target.value);
   }
  }