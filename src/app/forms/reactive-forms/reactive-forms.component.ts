import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  standalone: true,
  imports: [ReactiveFormsModule,JsonPipe],
  templateUrl: './reactive-forms.component.html',
  styleUrl: './reactive-forms.component.css'
})
export class ReactiveFormsComponent {

  studentForm:FormGroup=new FormGroup({

    firstName:new FormControl('',[Validators.required,Validators.minLength(4)]),
    lastName:new FormControl(''),
    userName:new FormControl('',[Validators.required,Validators.email]),
    city:new FormControl(''),
    state:new FormControl(''),
    zipcode:new FormControl(''),
    isAcceptTerms:new FormControl(''),  
  });

  formvalue:any;
  onsave(){
  this.formvalue=this.studentForm.value;
  }

}
