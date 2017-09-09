import { Component, OnInit } from '@angular/core';
import { Employee } from "../employee";
import { ActivatedRoute, Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import { FlashMessagesService } from 'angular2-flash-messages';
import { ResponseData } from "../response-data";

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.css']
})
export class EmployeeAddComponent implements OnInit {
  newEmployee: Employee = {firstName:'',lastName:'',dob:''};
  constructor(private route: ActivatedRoute, private router: Router, private http: HttpClient,private _flashMessagesService: FlashMessagesService) { }

  ngOnInit() {
  }

  redirect() {
    let link = ['/home'];
    this.router.navigate(link);
  }

  saveEmployeeDetails() {
    this.http.post<ResponseData>('http://localhost:3030/addemployee',this.newEmployee).subscribe(data=>
    {
      if(data.success){
        this._flashMessagesService.show(data.message, { cssClass: 'alert-success', timeout: 1000 });
        this.redirect();
      }else{
        this._flashMessagesService.show(data.message, { cssClass: 'alert-danger', timeout: 1000 });
        this.router.navigate(['/addemployee']);
      }
    });
  }

}
