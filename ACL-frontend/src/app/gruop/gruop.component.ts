import { Component, OnInit, Input } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import{AuthservicesService} from '../authservices.service'
@Component({
  selector: 'app-gruop',
  templateUrl: './gruop.component.html',
  styleUrls: ['./gruop.component.css']
})
export class GruopComponent implements OnInit {

  constructor(private http: HttpClient,
      public authser:AuthservicesService) { }

  ngOnInit(): void {
  }



  // private URL = 'http://localhost:9090/webapi/v1/group';
  public result;
  
  @Input() grupdata = {
    group_name: '',
    group_info: '',
    
    
  };

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    }),
  };

 

  // async onSubmitCreate(values) {
  //   this.data.group_name = values.group_name;
  //   this.data.group_info = values.group_info;
    
  //   this.result = await this.http
  //     .post(this.URL, JSON.stringify(this.data), this.httpOptions)
  //     .toPromise();
  // }
  onSubmitCreate(){
  this.authser.createGroup(this.grupdata).subscribe((data: {}) => {
   
    console.log(data)
  })
}
}
