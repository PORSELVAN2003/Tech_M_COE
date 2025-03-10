import { Routes } from '@angular/router';
import { EmployeeFormComponent } from './app/components/employee-form/employee-form.component';
import { EmployeeListComponent } from './app/components/employee-list/employee-list.component';
// import { EmployeeListComponent } from './components/employee-list/employee-list.component';
// import { EmployeeFormComponent } from './components/employee-form/employee-form.component';

export const routes: Routes = [
  { path: '', component: EmployeeListComponent },
  { path: 'add', component: EmployeeFormComponent },
  { path: 'edit/:id', component: EmployeeFormComponent },
  { path: '**', redirectTo: '' }
];