import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { GetUserDetailsService } from 'src/app/apis/get-user-details.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-settings-modal',
  templateUrl: './settings-modal.page.html',
  styleUrls: ['./settings-modal.page.scss'],
})
export class SettingsModalPage implements OnInit {

  username : string;
  name : string;
  old_pass : string;
  new_pass : string;
  user_name : string;

  constructor(private modalCtrl : ModalController, private http : HttpClient, private user : GetUserDetailsService, private route : Router) { }
 
  ngOnInit() {
     this.user.getUsername().subscribe(data =>{
      this.user_name =data;
     })
  }
  close(){
    this.modalCtrl.dismiss();
  }

  showUserInput(){
    var user_input = document.getElementById('username_input');
    user_input.classList.toggle('hide');
  }
  showPasswordInput(){
    var password_input = document.getElementById('password_input');
    password_input.classList.toggle('hide');
  }
  showNameInput(){
    var name_input = document.getElementById('name_input');
    name_input.classList.toggle('hide');
  }

  updateName(){
    var headers = new HttpHeaders();
   headers.append('Access-Control-Allow-Origin', '*');
   this.http.post('http://127.0.0.1/ratify/update_name.php',JSON.stringify(this.name), {headers:headers,withCredentials: true}).subscribe((response: any)=>{
    console.log(response);
    var status_success2 = document.getElementById('status_success2');
     var status_success_message2 = document.getElementById('status_success_message2');
      status_success_message2.innerHTML = response['status'];
      status_success2.style.display = 'block';
  });

  }
  
  updateUsername(){
    var headers = new HttpHeaders();
    headers.append('Access-Control-Allow-Origin', '*');
    this.http.post('http://127.0.0.1/ratify/update_username.php',JSON.stringify(this.username), {headers:headers,withCredentials: true}).subscribe((response: any)=>{
     console.log(response);
     var status_success = document.getElementById('status_success');
     var status_success_message = document.getElementById('status_success_message');
     var status_error = document.getElementById('status_error');
     var status_error_message = document.getElementById('status_error_message');
     if(response['status'] == 'success'){
      status_success_message.innerHTML = response['status'];
      status_success.style.display = 'block';
      status_error.style.display = 'none';
      this.user_name = response['new'];
     }
     else{
      status_error_message.innerHTML = response['status'];
      status_error.style.display = 'block';
      status_success.style.display = 'none';
     }
   });
  
}

updatePassword(){
  var headers = new HttpHeaders();
   headers.append('Access-Control-Allow-Origin', '*');
   const password={
    "new_pass" : this.new_pass,
    "old_pass" : this.old_pass,
   }
   var status_success = document.getElementById('status_success3');
   var status_success_message = document.getElementById('status_success_message3');
   var status_error = document.getElementById('status_error2');
   var status_error_message = document.getElementById('status_error_message2');
   this.http.post('http://127.0.0.1/ratify/update_password.php',JSON.stringify(password), {headers:headers,withCredentials: true}).subscribe((response: any)=>{
    console.log(response);
    if(response['status'] == 'success'){
      status_success_message.innerHTML = response['status'];
      status_success.style.display = 'block';
      status_error.style.display = 'none';
     }
     else{
      status_error_message.innerHTML = response['status'];
      status_error.style.display = 'block';
      status_success.style.display = 'none';
     }
   
  });
}

logout(){
  var headers = new HttpHeaders();
   headers.append('Access-Control-Allow-Origin', '*');

   this.http.post('http://127.0.0.1/ratify/logout.php', {headers:headers,withCredentials: true}).subscribe((response: any)=>{
    console.log(response);
    this.close();
    this.route.navigate(['home']);
  });
}
}
