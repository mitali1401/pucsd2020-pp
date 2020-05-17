import { Component, OnInit } from '@angular/core';
import{AuthservicesService} from '../authservices.service'
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-group-list',
  templateUrl: './group-list.component.html',
  styleUrls: ['./group-list.component.css']
})
export class GroupListComponent implements OnInit {
group :any;
  constructor(private http: HttpClient,
    public authser:AuthservicesService) { }

  ngOnInit(){
    this.loadGroups();
  }

  loadGroups() {
    
    return this.authser.getGroup().subscribe((data: {}) => {
      console.log(data);
      this.group = data['data'];
      // this.Employee = data['data'];
    })
  }

}
