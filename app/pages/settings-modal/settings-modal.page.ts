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
   
  });

  }
  updateUsername(){
    var headers = new HttpHeaders();
    headers.append('Access-Control-Allow-Origin', '*');
    this.http.post('http://127.0.0.1/ratify/update_username.php',JSON.stringify(this.username), {headers:headers,withCredentials: true}).subscribe((response: any)=>{
     console.log(response);
    
   });
  

}
}
