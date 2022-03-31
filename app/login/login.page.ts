import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {HttpClient, HttpHeaders} from '@angular/common/http';



@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private http: HttpClient ,private route: Router) { }
  

  username : string;
  email : string;
  password : string;
  
  onClickSignup(){
    var headers = new HttpHeaders();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json');
    headers.append('Access-Control-Allow-Origin', '*');

     const user = {
      "username" : this.username,
      "email" : this.email,
      "password" : this.password, 
  }
  
  console.log(user.username);
  console.log(JSON.stringify(user));

 
    this.http.post('http://127.0.0.1/ratify/sign_up.php',JSON.stringify(user), {headers:headers}).subscribe((response: any)=>{
      console.log(response);
      console.log('Success');
    })
    this.route.navigate(['/welcome'],{state:{username:this.username}});
  }



  onClickSignupAnimation() {

    var hide = document.getElementById('hide');

    var show = document.getElementById('show');
    hide.classList.toggle('move');

    setTimeout(()=>{
      hide.style.display = 'none';
    }, 700);

    // show.classList.toggle('moveLeft');
    setTimeout(()=>{
      show.classList.toggle('show');
    },700)
    
    setTimeout(()=>{
      show.classList.toggle('startPlace');
    },800)
    

     
}
 

  ngOnInit() {
  }
  
   
}
