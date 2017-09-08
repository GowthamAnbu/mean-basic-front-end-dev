import { Component, OnInit } from '@angular/core';
import { Employee } from "../employee";
import { Router } from "@angular/router";

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  employee:Employee[]=[
    {firstName:'Merrick',lastName:'Baliton',dob:'04-10-1995'},
    {firstName:'Nick',lastName:'Cole',dob:'01-01-1995'},
    {firstName:'Jack',lastName:'Rickson',dob:'12-12-1995'}
  ]
  constructor(private router: Router) { }

  ngOnInit() {
  }

  reRoute(){
    console.log('working');
    let link = ['/addemployee'];
    this.router.navigate(link);
  }

}
