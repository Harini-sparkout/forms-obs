import { Component } from '@angular/core';
import { Observable,Observer } from 'rxjs';

@Component({
  selector: 'app-obser',
  imports: [],
  templateUrl: './obser.html',
  styleUrl: './obser.css',
})
export class Obser {
               myObservable!: Observable<number>;
               createObservable(){
                this.myObservable = new Observable((observer : Observer <number>)=>{
                 observer.next(10);
                 observer.next(20);
                 observer.next(30);
                 observer.complete();
                });
                this.myObservable.subscribe({
                  next : (value)=>console.log("value:",value),
                  error:(err)=> console.log("Error",err),
                  complete:() => console.log("observable completed")
                })
               }
}
