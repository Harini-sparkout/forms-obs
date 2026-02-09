import { Component,signal,computed,effect, untracked } from '@angular/core';

@Component({
  selector: 'app-count',
  imports: [],
  templateUrl: './count.html',
  styleUrl: './count.css',
})
export class Count {
   count = signal(1);
   doubleCount = computed(()=>this.count()*2);
   constructor(){
    effect(()=>{

      console.log("count",this.count()) ;
      
      console.log("doublecount",this.doubleCount());
    })
   }
   increment(){
    this.count.update(i=> i+1);

   }
   reset(){
    this.count.set(0);
   }


}
