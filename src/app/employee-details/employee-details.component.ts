import { Component, OnInit } from '@angular/core';
import { Employee } from "../employee";
import { Router } from "@angular/router";
import { EmployeeService } from "../employee.service";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  employee: Employee[];
  constructor(private router: Router, private employeeService:EmployeeService,private http:HttpClient) { }

  ngOnInit() {
    // this.getEmployees();
    this.http.get<Employee[]>('http://localhost:3030/home').subscribe(data => {
      // Read the result field from the JSON response.
      this.employee = data;
    },err => {
      console.log('Something went wrong!');
    });
  }
  
}
