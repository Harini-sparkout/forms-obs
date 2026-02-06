import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { ReplaySubject } from 'rxjs';
@Component({
  selector: 'app-replay',
  imports: [AsyncPipe],
  templateUrl: './replay.html',
  styleUrl: './replay.css',
})
export class Replay {
           message = new ReplaySubject<string>(3);
           ngOnInit (){
            this.message.next('hello');
            this.message.next('welcome to  angular');
            this.message.next('welcome to chrome');
           }
           sendMessage(msg: string){
       this.message.next(msg);
}
}
