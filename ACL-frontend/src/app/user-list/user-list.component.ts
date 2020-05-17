import { Component, OnInit } from '@angular/core';
import{AuthservicesService} from '../authservices.service'
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  user :any;
  constructor(private http: HttpClient,
    public authser:AuthservicesService) { }

  ngOnInit(): void {
    this. loadUser()
  }

  loadUser() {
    
     this.authser.getUser().subscribe((data: {}) => {
      console.log(data);
      this.user = data['data'];
      // this.Employee = data['data'];
    })
  }

}
