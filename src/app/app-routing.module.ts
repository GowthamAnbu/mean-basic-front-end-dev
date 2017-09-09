import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmployeeDetailsComponent } from "./employee-details/employee-details.component";
import { EmployeeAddComponent } from "./employee-add/employee-add.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
// Route config let's you map routes to components
const routes: Routes = [
  // map '/home' to the employee list component
  {
    path: 'home',
    component: EmployeeDetailsComponent,
  },{
    path: 'addemployee',
    component:EmployeeAddComponent
  },
  // map '/' to '/home' as our default route
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path:'404',
    component:PageNotFoundComponent
  },
  {
    path:'**',
    redirectTo:'404'
  }
];

// HERE: New module
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
