import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
// import { EmployeeListComponent } from './components/employee-list/employee-list.component';
// import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
// import { DataBindingComponent } from './components/data-binding/data-binding.component';
//import { StructuralDirComponent } from './components/directives/structural-dir/structural-dir.component';
//import { AttributeDirectiveComponent } from './components/directives/attribute-directive/attribute-directive.component';
import { RouterLink, RouterOutlet } from '@angular/router';
import { IfelseComponent } from "./components/control flow/ifelse/ifelse.component";

@Component({
  selector: 'app-root',
  standalone: true,
   imports: [
    // StructuralDirComponent,
    //AttributeDirectiveComponent
    RouterOutlet, RouterLink,
    // IfelseComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-18-tutorial';
}
