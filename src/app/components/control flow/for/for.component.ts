import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-for',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './for.component.html',
  styleUrl: './for.component.css'
})
export class ForComponent {

dayNumber:string='';

  cityArray:string[]=['pune','mumbai','nagpur','thane'];
  studentList:any[]=[
    {studId:12,name:'aaa',city:'pune', isActive:false},
    {studId:22, name:'bbb', city:'mumbai', isActive:false},
    {studId:32, name:'ccc', city:'nagpur', isActive:true},
    {studId:42, name:'ddd', city:'thane', isActive:false},
    {studId:52, name:'eee', city:'mumbai', isActive:true}
  ]

}
