import { Component, OnInit } from '@angular/core';
import { RestApiService } from "../shared/rest-api.service";
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  Employee: any = [];
  display: string;
  
  constructor(
    public restApi: RestApiService
  ) { }

  ngOnInit() {
    this.loadEmployees()
   
  }
  
  // Get employees list
  loadEmployees() {
    return this.restApi.getEmployees().subscribe((data: {}) => {
      console.log(data);

      this.Employee = data;
    })
  }
  getEmployeeById(id: string) {
    return this.restApi.getEmployee(id).subscribe((data: {}) => {

      console.log(data);
      this.Employee = data;



    })
  }
  
  // Delete employee
  deleteEmployee(id) {
    if (window.confirm('Are you sure, you want to delete?')){
      this.restApi.deleteEmployee(id).subscribe(data => {
        this.loadEmployees()
        //this.router.navigate(['/employees-list'])
      })
    }
  }  

}
