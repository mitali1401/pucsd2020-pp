import { Component, OnInit, Input } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import{LoginserviceService} from '../loginservice.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  
public result;
   @Input() userInfo = { id: '',password:''}
  
public constructor(private http: HttpClient,public loginauthser:LoginserviceService) { }
 
 httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}  
  
  
  
  ngOnInit(){
    
  }
  signUpuser(id){
    alert("got1")
      this.loginauthser.loginInfo(this.userInfo.id).subscribe(data =>{
        console.log(data);
        
      })
  }
  // userid: any;

  // password: any;
  // constructor(private http: HttpClient) { }
}
  // signUpuser(userid) {
  //   this.http.post("http://localhost:9090/webapi/v1/login").subscribe(res => {
  //     va
  //   }
  //   )
  
  //  userid :any;

  //   password: any;

  //   constructor(
  //     // private router: Router,
  //     // private authService: AuthservicesService,
  //     private http: HttpClient
  //   ) { }
  //   user: any[];
  //   signUpuser = function (userinfo: { userid: number,password:any}) {
  //     this.UserObj = 
  //     {
  //       "id": userinfo.userid,

  //       "Password": userinfo.password
  //     }

  //       this.http.post("http://localhost:9090/webapi/v1/login").subscribe(res => {
  //         var data = res.json();
  //         console.log(data);
  //         var hasmatch = false;
  //         for (var i = 0; i < data.length; ++i) {
  //           if (data[i].Password == userinfo.password)
  //           {
  //             hasmatch =true;
  //             break;
  //           }
  //       }
  //       if(hasmatch == true)
  //       {
  //         alert("logd in")

  //       }
  //       else{
  //         alert("wrng")
  //       }
  //     })
  //   }
  

