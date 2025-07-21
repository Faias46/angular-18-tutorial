// Import necessary Angular modules
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

// Define the component metadata
@Component({
  selector: 'app-attribute-directive',              // Selector used in HTML to render this component
  standalone: true,                                 // Enables this component to be used without being declared in a module
  imports: [CommonModule, FormsModule],             // Importing required modules like CommonModule and FormsModule
  templateUrl: './attribute-directive.component.html', // External HTML template
  styleUrl: './attribute-directive.component.css'      // External CSS file
})
export class AttributeDirectiveComponent {

  // Used for binding dynamic class to Div-1 using ngClass
  div1bgcolor: string = "bg-primary";

  // Used for toggling class in Div-2 using boolean
  isDiv2Active: boolean = false;

  // Variables used for comparing numbers (used with ngClass on Div-3)
  num1: string = '';
  num2: string = '';

  // Used to control visibility or styling via ngIf/ngClass etc.
  isActive: boolean = false;

  // Custom inline styles applied to a div (can be used with [ngStyle])
  customerStyle: any = {
    'color': 'white',
    'background-color': 'red',
    'width': '200px',
    'height': '200px',
    'border-radius': '50%',          // Makes it circular
    'text-align': 'center'           // Centers the text inside
  };

  // Sample student list with multiple properties, including 'isActive' for conditional styling
  studentList: any[] = [
    { studId: 12, totalmarks: 23, gender: 'male', name: 'aaa', city: 'pune', isActive: false },
    { studId: 22, totalmarks: 33, gender: 'female', name: 'bbb', city: 'mumbai', isActive: false },
    { studId: 22, totalmarks: 92, gender: 'male', name: 'ccc', city: 'bengaluru', isActive: false },
    { studId: 22, totalmarks: 85, gender: 'female', name: 'ddd', city: 'mumbai', isActive: true },
    { studId: 22, totalmarks: 66, gender: 'male', name: 'eee', city: 'nagpur', isActive: false },
    { studId: 22, totalmarks: 52, gender: 'male', name: 'fff', city: 'thane', isActive: true },
  ];

  // Change Div-1 class to red background
  addRedclass() {
    this.div1bgcolor = "bg-danger";
  }

  // Change Div-1 class to blue background
  addBlueclass() {
    this.div1bgcolor = "bg-primary";
  }

  // Toggle the boolean flag to switch classes for Div-2
  toggleDiv2class() {
    this.isDiv2Active = !this.isDiv2Active;
  }
}
