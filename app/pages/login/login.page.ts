import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {HttpClient, HttpHeaders} from '@angular/common/http';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  username : string;
  email : string;
  password : string;
  passwod_confirm : string;

  login_username : string;
  login_password : string;

  constructor(private http: HttpClient ,private route: Router) { }
 
  
  onClickSignup(){
    var response_message;
    var headers = new HttpHeaders();
    headers.append('Access-Control-Allow-Origin', '*');

     const user = {
      "username" : this.username,
      "email" : this.email,
      "password" : this.password,
      "confirm_pass" : this.passwod_confirm, 
  }

        var signup_status = document.getElementById('signup_status');
     
       
      this.http.post('http://127.0.0.1/ratify/sign_up.php',JSON.stringify(user), {headers:headers,withCredentials: true}).subscribe((response: any)=>{
      if(response.status == 'taken'){
        console.log('Username or email already taken.');
        signup_status.innerText = 'Username or email\nalready taken.'
        response_message = 'Fail';
      }
      else if(response.status == "password confirmation failed"){
        signup_status.innerText = 'Passwords dont match.';
        response_message = 'Fail';
      }
      else{
        var session_id = response.sessionid;
        sessionStorage.setItem("session_id", session_id);
        response_message = response.status;
        console.log(response);
        this.route.navigate(['/welcome'],{state:{username: response.username}});
      }
      console.log(response_message);
    })
   
  }
  onClickLogin(){
  var login_status = document.getElementById('login_status');
   var headers = new HttpHeaders();
   headers.append('Access-Control-Allow-Origin', "*");

   const user = {
    "username" : this.login_username,
    "password" : this.login_password,
   }

   this.http.post("http://127.0.0.1/ratify/login.php", JSON.stringify(user), {headers:headers, withCredentials :true}).subscribe((response:any)=>{
     console.log(response);
     if(response.status == "incorrect pass"){
      login_status.innerText = "incorrect pass";
     }
     else if(response.status == "user not found"){
       login_status.innerText ="user not found";
     } else if(response.status == "success"){
       this.route.navigate(['./homepage/profile']);
     }
    
   })
    
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

onClickLoginAnimation() {
   this.route.navigate(['home']);
}
 

  ngOnInit() {

    

  }
  
   
}
