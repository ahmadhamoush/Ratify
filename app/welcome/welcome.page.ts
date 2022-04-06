import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Session } from 'protractor';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {

  name : string;
  constructor(private http : HttpClient) {
    
   }
   userFlow = history.state.username;
    
   getStarted(){
    const data ={
      "name" : this.name,
      "username" : this.userFlow,
   };
    var headers = new HttpHeaders();
    // headers.append("Accept", 'application/json');
    // headers.append('Content-Type', 'application/json');
    headers.append('Access-Control-Allow-Origin', '*');
    // headers.append('Set-Cookie', 'PHPSESSID=' + localStorage.getItem('session_id') + "; path=/");

    this.http.post('http://127.0.0.1/ratify/get_started.php',JSON.stringify(data), {headers:headers,withCredentials: true}).subscribe((response: any)=>{
      console.log(response);
      

    })
   }
  ngOnInit() {
  }

}
