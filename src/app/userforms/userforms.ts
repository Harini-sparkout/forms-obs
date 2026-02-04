import { Component, OnInit ,ViewChild} from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Subject } from 'rxjs';
@Component({
  selector: 'app-userforms',
  imports: [FormsModule],
  templateUrl: './userforms.html',
  styleUrl: './userforms.css',
})
export class Userforms implements OnInit {
      @ViewChild('detailsForm') detailsForm: NgForm | undefined;
      details={
        name:'',age:null,gender:''
      };
      formChanges$ = new Subject<{name: string;age: number| null; gender: string}>();
      ngOnInit(): void {
        this.formChanges$.subscribe(value=>{
          console.log('form changed:',value);

        })
      }
      onInputChange(){
        if(this.detailsForm){
          this.formChanges$.next(this.detailsForm.value);
        }
      }
      submit(form: NgForm){
        if(form.invalid){
          return;
        }
        console.log('form submitted:',form.value);
        form.resetForm();
      }
      }

