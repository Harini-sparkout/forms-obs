import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Userforms } from './userforms/userforms';

@Component({
  selector: 'app-root',
  imports: [FormsModule,Userforms],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

}
