// import { Component, OnInit } from '@angular/core';
// import { RestApiService } from "../shared/rest-api.service";

// @Component({
//   selector: 'app-employee-delete',
//   templateUrl: './employee-delete.component.html',
//   styleUrls: ['./employee-delete.component.css']
// })
// export class EmployeeDeleteComponent implements OnInit {
//   Employee: any = [];

//   constructor(
//     public restApi: RestApiService
//   ) { }


//   ngOnInit() {
//     // this.loadEmployees()
//   }

//   // Get employees list
//   // loadEmployees() {
//   //   return this.restApi.getEmployees().subscribe((data: {}) => {
//   //     this.Employee = data;
//   //   })
//   // }
// clearField(){
//   this.Employee.id=null;
// }
//   deleteEmployee(id) {
//     if (window.confirm('Are you sure, you want to delete?')){
//       this.restApi.deleteEmployee(id).subscribe(data => {
//         alert( " deleted successfully   ")
//         this.clearField();
//       })
//     }
//   }  
// }
