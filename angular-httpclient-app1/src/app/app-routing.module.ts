import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeCreateComponent } from './employee-create/employee-create.component';

import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeEditComponent } from './employee-edit/employee-edit.component';
// import { EmployeeDeleteComponent } from './employee-delete/employee-delete.component';

import { AppComponent } from './app.component';
import { SearchEmplyoeeComponent } from './search-emplyoee/search-emplyoee.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'employees-list' },
  { path: 'create-employee', component: EmployeeCreateComponent },
  { path: 'employees-list', component: EmployeeListComponent },
  { path: 'employee-edit/:id', component: EmployeeEditComponent },
  // { path: 'employee-delete', component: EmployeeDeleteComponent },
  { path: 'search-employee', component: SearchEmplyoeeComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
