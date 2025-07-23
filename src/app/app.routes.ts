import { Routes } from '@angular/router';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { StructuralDirComponent } from './components/directives/structural-dir/structural-dir.component';
import { AttributeDirectiveComponent } from './components/directives/attribute-directive/attribute-directive.component';
import { IfelseComponent } from './components/control flow/ifelse/ifelse.component';
import { ForComponent } from './components/control flow/for/for.component';

export const routes: Routes = [
    {
        path:'add-emp',
        component:AddEmployeeComponent
    },
    {
        path:'data-binding',
        component:DataBindingComponent
    },
    {
        path: 'emp-list',
        component:EmployeeListComponent
    },
    {
        path:'structural-dir',
        component:StructuralDirComponent
    },
    {
        path:'attribute-dir',
        component:AttributeDirectiveComponent,
    },
    {
        path:'ifelse',
        component:IfelseComponent
    },
    {
        path:'for',
        component:ForComponent
    }





    // {
    //     path: '',
    //     redirectTo: 'emp-list',
    // }

];
