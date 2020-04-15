import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Employee } from '../shared/employee';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RestApiService {
  
  // Define API
  apiURL = 'http://localhost:8080';


  constructor(private http: HttpClient) { }
   // Http Options
   httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }  

  // HttpClient API get() method => Fetch employees list
  getEmployees() {
    return this.http.get(this.apiURL + '/user')
    // .pipe(
    //   retry(1),
    //   catchError(this.handleError)
    // )
  }
  handleError(handleError: any): import("rxjs").OperatorFunction<Employee, any> {
    throw new Error("Method not implemented.");
  }

  // HttpClient API get() method => Fetch employee
  getEmployee(id: string) {
    return this.http.get(this.apiURL + '/user/' + id)
    // .pipe(
    //   retry(1),
    //   catchError(this.handleError)
    // )
  }  

  // HttpClient API post() method => Create employee
  createEmployee(employee: { name: string; Lname:string; email: string; phone: number;password:string }) {
    return this.http.post(this.apiURL + '/user', JSON.stringify(employee), this.httpOptions)
    // .pipe(
    //   retry(1),
    //   catchError(this.handleError)
    // )
  } 
  // update Emp
  updateEmployee(id: string, employee: any) {
    
    return this.http.put(this.apiURL + '/user/' + id, JSON.stringify(employee), this.httpOptions)
    
    
  }
  deleteEmployee(id: string){
    return this.http.delete(this.apiURL + '/user/' + id, this.httpOptions)
    
    // .pipe(
    //   retry(1),
    //   catchError(this.handleError)
    // )
  }
}
