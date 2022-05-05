import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { LoadingController } from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  //signup information
  username : string;
  email : string;
  password : string;
  passwod_confirm : string;
  //login information
  login_username : string;
  login_password : string;

  constructor(private http: HttpClient ,private route: Router, private loadingCtrl : LoadingController) { }
 
  
 async onClickSignup(){
   //presenting loading alert on sign up
    const loading = await this.loadingCtrl.create({
      message: 'Signing Up...',
      duration: 500,
    });
    await loading.present();
   
    var response_message;
    var headers = new HttpHeaders(); //setting headers to avoid CORS
    headers.append('Access-Control-Allow-Origin', '*');

    //storing user details in object to be posted
     const user = {
      "username" : this.username,
      "email" : this.email,
      "password" : this.password,
      "confirm_pass" : this.passwod_confirm, 
  }
      //changing displayed sign up status if authenticated
      var signup_status = document.getElementById('signup_status');
       
      //posting user details to be checked if authenticated or not
      this.http.post('http://127.0.0.1/ratify/sign_up.php',JSON.stringify(user), {headers:headers,withCredentials: true}).subscribe((response: any)=>{
      loading.onDidDismiss(); //dismissing loading on post

      //validating inputs
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
        //if authenticated navigate to welcome page
        var session_id = response.sessionid;
        sessionStorage.setItem("session_id", session_id);
        response_message = response.status;
        console.log(response);
        this.route.navigate(['/welcome'],{state:{username: response.username}});
      }
      console.log(response_message);
    });
   
  }
  async onClickLogin(){
       //presenting loading alert on login
    const loading = await this.loadingCtrl.create({
      message: 'Logging In...',
      duration: 500,
    });
    await loading.present();

  //changing displayed login status if authenticated
   var login_status = document.getElementById('login_status');
   var headers = new HttpHeaders();
   //setting headers to avoid CORS
   headers.append('Access-Control-Allow-Origin', "*");
   
    //storing user details in object to be posted
   const user = {
    "username" : this.login_username,
    "password" : this.login_password,
   }
 //posting user details to be checked if authenticated or not
   this.http.post("http://127.0.0.1/ratify/login.php", JSON.stringify(user), {headers:headers, withCredentials :true}).subscribe((response:any)=>{
     console.log(response);
      loading.onDidDismiss();

     //validating inputs
     if(response.status == "incorrect pass"){
      login_status.innerText = "incorrect pass";
     }
     else if(response.status == "user not found"){
       login_status.innerText ="user not found";
     } else if(response.status == "success"){
         //if authenticated navigate to feed
       this.route.navigate(['./homepage/feed']);
     }
    
   })
    
  }

  onClickSignupAnimation() {
    var hide = document.getElementById('hide');
    var show = document.getElementById('show');
    hide.classList.toggle('move');

    //hiding the login form and showing the sign up form 
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
