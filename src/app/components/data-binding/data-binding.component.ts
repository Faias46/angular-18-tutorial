import { Component,signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [FormsModule], // Import FormsModule for two-way data binding
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {

  // string,number,boolean,date
  courseName:string='Angular 18';
  inputType="radio";
  stateName:string='maharashtra';
  rollNo:number=123;
  myClassName:string='bg-primary';
  isIndian:boolean=false;
  currentDate:Date=new Date();

  //signal 
  firstName= signal("Ashik Nagur");

  //==========================================
  constructor() {

  }

  showMessage()
{
  alert("welcome to angular 18")
}

showAlert(message:string){
  alert(message);
}
changecourseName(){
  this.courseName='react js';
  //using signal changing the name
  this.firstName.set('faias nagur') //set method is used to change the value of signal
}
}
