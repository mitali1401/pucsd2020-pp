import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { User } from './user';
// import { userInfo } from 'os';
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
  // user opearations
  createUser(users: { first_name: string; last_name: string; password: string }) {
    return this.http.post(this.apiURL + 'user', JSON.stringify(users), this.httpOptions)

  }
  updateUser(id: string, user: any) {

    return this.http.put(this.apiURL + '/user/' + id, JSON.stringify(user), this.httpOptions)


  }
  getUser() {
    return this.http.get(this.apiURL + 'user', this.httpOptions)
  }
  
  deleteUser(id) {
    return this.http.delete(this.apiURL + 'user/' + id, this.httpOptions)
  }
  
  //group opeartions
  createGroup(grupdata: { group_name: string; group_info: string }) {

    // return this.http.post(`${this.apiURL}group`,grupdata)
    return this.http.post(this.apiURL + 'group', JSON.stringify(grupdata), this.httpOptions)

  }
  getGroup() {
    return this.http.get(this.apiURL + 'group', this.httpOptions)
  }
  
  public addUserGroup(group_id, user_id) {
    let userGroup = { "group_id": parseInt(group_id), "user_id": parseInt(user_id) }
    return this.http.post(this.apiURL + 'usergroup', JSON.stringify(userGroup), this.httpOptions)
  }
}
