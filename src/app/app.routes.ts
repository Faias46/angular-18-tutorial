import { Routes } from '@angular/router';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { StructuralDirComponent } from './components/directives/structural-dir/structural-dir.component';
import { AttributeDirectiveComponent } from './components/directives/attribute-directive/attribute-directive.component';
import { IfelseComponent } from './components/control flow/ifelse/ifelse.component';
import { ForComponent } from './components/control flow/for/for.component';
import { PipeComponent } from './components/pipe/pipe.component';
import { ReactiveFormsComponent } from './forms/reactive-forms/reactive-forms.component';
import { GetApiComponent } from './components/api integration/get-api/get-api.component';
import { PostApiComponent } from './components/api integration/post-api/post-api.component';

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
    },{
        path:'pipe',
        component:PipeComponent
    },
    {
        path:'reactive-forms',
        component:ReactiveFormsComponent
    },
    {
        path:'get-api',
        component:GetApiComponent
    },
    {
        path:'post-api',
        component:PostApiComponent
    }





    // {
    //     path: '',
    //     redirectTo: 'emp-list',
    // }

];
