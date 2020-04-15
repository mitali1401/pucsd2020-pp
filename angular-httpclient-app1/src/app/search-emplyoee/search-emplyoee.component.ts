import { Component, OnInit } from '@angular/core';
import { RestApiService } from "../shared/rest-api.service";

@Component({
  selector: 'app-search-emplyoee',
  templateUrl: './search-emplyoee.component.html',
  styleUrls: ['./search-emplyoee.component.css']
})
export class SearchEmplyoeeComponent implements OnInit {
  Employee: any = [];
  constructor(public restApi: RestApiService) { }

  ngOnInit(): void {
  }


getEmployeeById(id: string) {
  return this.restApi.getEmployee(id).subscribe((data: {}) => {

    console.log(data);
    this.Employee = data;



  })
}
loadEmployees() {
  return this.restApi.getEmployees().subscribe((data: {}) => {
    console.log(data);

    this.Employee = data;
  })
}
deleteEmployee(id) {
  if (window.confirm('Are you sure, you want to delete?')){
    this.restApi.deleteEmployee(id).subscribe(data => {
      this.loadEmployees()
      //this.router.navigate(['/employees-list'])
    })
  }
}  
}