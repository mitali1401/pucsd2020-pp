import { Component, OnInit, Input } from '@angular/core';
import{AuthservicesService} from '../authservices.service'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import{FormBuilder,FormGroup,FormControl} from '@angular/forms'
@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  myGroup = new FormGroup({
    first_name :new FormControl,
     last_name : new FormControl,
     username:new FormControl,
     password: new FormControl,
  });
  constructor(private http: HttpClient,
    public authser:AuthservicesService) { }

  ngOnInit(): void {
  }
  @Input() users = {
    first_name :'',
     last_name : '',
     username:'',
     password: '',
    
    
  };
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    }),
  };

  onSubmitCreateUser(){
    this.authser.createUser(this.users).subscribe((data: {}) => {
     
      console.log(data)
    })
  }
}
