import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

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

  constructor(private modalCtrl : ModalController, private http : HttpClient) { }

  ngOnInit() {
    
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
     }
     else{
      status_error_message.innerHTML = response['status'];
      status_error.style.display = 'block';
      status_success.style.display = 'none';
     }
    

   });
  

}
}
