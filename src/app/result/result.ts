import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { AsyncSubject } from 'rxjs';
@Component({
  selector: 'app-result',
  imports: [AsyncPipe],
  templateUrl: './result.html',
  styleUrl: './result.css',
})
export class Result {
          result = new AsyncSubject<string>()
;
startProcess(){
  this.result.next("first value");
  this.result.next('second value');
  this.result.next('final result');
   this.result.complete();
 
}}
