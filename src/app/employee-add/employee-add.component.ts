import { Component, OnInit } from '@angular/core';
import { Employee } from "../employee";
import {ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.css']
})
export class EmployeeAddComponent implements OnInit {
  newEmployee: Employee[]=[
    {firstName:'',lastName:'',dob:''}
  ];
  constructor(private route:ActivatedRoute, private router: Router) { }

  ngOnInit() {
  }

  redirect(){
    console.log("redirecting....");
    let link = ['/home'];
    this.router.navigate(link);
  }

  saveEmployeeDetails(){
    console.log("saving Employee Details.....");
    console.log(this.newEmployee);
    this.redirect();
  }

}
