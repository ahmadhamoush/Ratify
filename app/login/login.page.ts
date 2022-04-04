import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  signupForm: FormGroup;
  username : string;
  email : string;
  password : string;
  confirm_pass : string;

  constructor(private http: HttpClient ,private route: Router) { }
  
 
 
  
  onClickSignup(){
    var response_message;
    var headers = new HttpHeaders();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json');
    headers.append('Access-Control-Allow-Origin', '*');

     const user = {
      "username" : this.username,
      "email" : this.email,
      "password" : this.password, 
  }

  console.log(JSON.stringify(user));
        var username = document.getElementById('username');
        var password = document.getElementById('password');
        var confirm_pass = document.getElementById('confirm_pass');
        var usertaken = document.getElementById('user_taken');
        var emailtaken = document.getElementById('email_taken');

      this.http.post('http://127.0.0.1/ratify/sign_up.php',JSON.stringify(user), {headers:headers}).subscribe((response: any)=>{
      if(response.status == 'taken'){
        console.log('Username or email already taken.')
        response_message = 'Fail';
        username.classList.remove('ng-valid');
        username.classList.remove('ion-valid');
        username.classList.add('ng-invalid');
        usertaken.style.display = 'block';
      }
  
      else{
        response_message = 'Success';
        this.route.navigate(['/welcome'],{state:{username:this.username}});
      }
      console.log(response_message);
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
 

  ngOnInit() {

    

  }
  
   
}
