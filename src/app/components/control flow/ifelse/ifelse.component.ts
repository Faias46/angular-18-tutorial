import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ifelse',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './ifelse.component.html',
  styleUrl: './ifelse.component.css'
})
export class IfelseComponent {
  div1visible:boolean=true;
  iswarningdiv2visible:boolean=false;

  num1:string='';
  num2:string='';

  selectedStatus:string='';

  showdiv1(){
    this.div1visible=true;
  }
  hidediv1(){
    this.div1visible=false;
  }

  togglediv2(){
    this.iswarningdiv2visible=!this.iswarningdiv2visible;
  }

}
