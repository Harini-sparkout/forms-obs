import { Component,signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-write',
  imports: [],
  templateUrl: './write.html',
  styleUrl: './write.css',
})
export class Write {
  name:WritableSignal<string>=signal("Angular");
  changeName(){
    this.name.set("welcome to signals concept");

  }
  addText(){
    this.name.update(oldValue => oldValue+'hii');
  }
reset(){
  this.name.set("Angular")
}
}
