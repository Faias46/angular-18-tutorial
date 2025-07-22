import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
// import { EmployeeListComponent } from './components/employee-list/employee-list.component';
// import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
// import { DataBindingComponent } from './components/data-binding/data-binding.component';
//import { StructuralDirComponent } from './components/directives/structural-dir/structural-dir.component';
//import { AttributeDirectiveComponent } from './components/directives/attribute-directive/attribute-directive.component';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
   imports: [//RouterOutlet,EmployeeListComponent,AddEmployeeComponent,DataBindingComponent,
   // StructuralDirComponent,
    //AttributeDirectiveComponent
  RouterOutlet,RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-18-tutorial';
}
