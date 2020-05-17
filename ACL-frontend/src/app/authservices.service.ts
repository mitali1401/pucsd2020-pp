import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { User } from './user';
@Injectable({
  providedIn: 'root'
})
export class AuthservicesService {



  private apiURL: string = 'webapi/v1/';
  constructor(private http: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    })

  }


  createGroup(grupdata: { group_name: string; group_info: string }) {

    // return this.http.post(`${this.apiURL}group`,grupdata)
    return this.http.post(this.apiURL + 'group', JSON.stringify(grupdata), this.httpOptions)

  }
  getGroup() {
    return this.http.get(this.apiURL + 'group', this.httpOptions)
  }
  // loginInfo(id){
  //   return this.http.post(this.apiURL+'login',JSON.stringify(id),this.httpOptions)

  // }
  createUser(users : { first_name: string; last_name: string; username:string ;password: string }) {
    return this.http.post(this.apiURL + 'user', JSON.stringify(users), this.httpOptions)

  }
  getUser() {
    return this.http.get(this.apiURL + 'user', this.httpOptions)
  }
}