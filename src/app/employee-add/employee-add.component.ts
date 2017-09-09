import { Component, OnInit } from '@angular/core';
import { Employee } from "../employee";
import { ActivatedRoute, Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.css']
})
export class EmployeeAddComponent implements OnInit {
  newEmployee: Employee = {firstName:'',lastName:'',dob:''};
  constructor(private route: ActivatedRoute, private router: Router, private http: HttpClient) { }

  ngOnInit() {
  }

  redirect() {
    console.log("redirecting....");
    let link = ['/home'];
    this.router.navigate(link);
  }

  saveEmployeeDetails() {
    this.http.post('http://localhost:3030/addemployee',this.newEmployee).subscribe();
    this.redirect();
  }

}
