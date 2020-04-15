import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { RestApiService } from "../shared/rest-api.service";

@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.css']
})
export class EmployeeCreateComponent implements OnInit {

  @Input() employeeDetails = { name: '', Lname:'', email: '', phone: 0 ,password:''}

  constructor(
    public restApi: RestApiService, 
    public router: Router
  ) { }

  ngOnInit() { }
 
  
    resetEmployee(){
        this.employeeDetails.name=null;
        this.employeeDetails.Lname=null;
        this.employeeDetails.email=null;
        this.employeeDetails.phone=null;
      }

  addEmployee( ) {
    this.restApi.createEmployee(this.employeeDetails).subscribe((data: {}) => {
      this.resetEmployee();
      
      this.router.navigate(['/employees-list'])
    })
  }
  

}