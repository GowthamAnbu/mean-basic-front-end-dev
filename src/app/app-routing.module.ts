import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmployeeDetailsComponent } from "./employee-details/employee-details.component";
import { EmployeeAddComponent } from "./employee-add/employee-add.component";
// Route config let's you map routes to components
const routes: Routes = [
  // map '/home' to the people list component
  {
    path: 'home',
    component: EmployeeDetailsComponent,
  },{
    path: 'addemployee',
    component:EmployeeAddComponent
  },
  // map '/' to '/persons' as our default route
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
];

// HERE: New module
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
