import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-structural-dir',                      // Selector for this component
  standalone: true,                                   // Standalone component declaration
  imports: [CommonModule, FormsModule,RouterLink],               // Importing required modules for template binding
  templateUrl: './structural-dir.component.html',     // HTML template file
  styleUrl: './structural-dir.component.css'          // CSS styling file
})
export class StructuralDirComponent {

  // Controls visibility of Div-1
  isDiv1Visible: boolean = true;

  // Controls visibility of Div-2
  isDiv2visible: boolean = false;

  // Bound to input fields for numeric comparison in Div-3
  num1: string = '';
  num2: string = '';

  
  isActive: boolean = false; // Controls visibility of Div-4 based on checkboxs
  

  // Bound to dropdown selection to control Div-4 visibility
  selectedState: string = '';

  cityArray:string[]=['pune','mumbai','nagpur','thane'];

  studentList:any[]=[
    {studId:1, name:'aaa',city:'pune',isActive:false },
    {studId:2, name:'bbb',city:'mumbai',isActive:true },
    {studId:3, name:'ccc',city:'nagpur',isActive:false },
    {studId:4, name:'ddd',city:'thane',isActive:true },
    {studId:5, name:'eee',city:'mumbai',isActive:false },
  ]

  // Method to show Div-1
  showDiv1() {
    this.isDiv1Visible = true;
  }

  // Method to hide Div-1
  hideDiv2() {
    this.isDiv1Visible = false;
  }

  // Toggles visibility of Div-2
  togglediv2() {
    this.isDiv2visible = !this.isDiv2visible;
  }
}
