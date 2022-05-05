import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { GetUserDetailsService } from 'src/app/apis/get-user-details.service';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-settings-modal',
  templateUrl: './settings-modal.page.html',
  styleUrls: ['./settings-modal.page.scss'],
})
export class SettingsModalPage implements OnInit {
  //current user information
  username : string;
  name : string;
  old_pass : string;
  //new user information
  new_pass : string;
  user_name : string;

  constructor(private modalCtrl : ModalController, private http : HttpClient, 
    private user : GetUserDetailsService, private route : Router, private alertCtrl : AlertController,
    private toastCtrl :ToastController) { }
 
  ngOnInit() {
    //getting currect user username
     this.user.getUsername().subscribe(data =>{
      this.user_name =data;
     })
  }
  //closing modal on click
  close(){
    this.modalCtrl.dismiss();
  }
  //toast function that will be used on each option and will show a dynamic message and color based on option
  async toast(message, color){
    const toast = this.toastCtrl.create({
      message : message,
      duration : 2000,
      color: color
    });
    (await toast).present();
  }
  
  //showing input based on option clicked
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

  //updating name
  updateName(){
   var headers = new HttpHeaders();
   headers.append('Access-Control-Allow-Origin', '*');
   this.http.post('http://127.0.0.1/ratify/update_name.php',JSON.stringify(this.name), {headers:headers,withCredentials: true}).subscribe((response: any)=>{
    console.log(response);
    this.toast(response['status'], 'success');
  });

  }
  
  //updating username
  updateUsername(){
    var headers = new HttpHeaders();
    headers.append('Access-Control-Allow-Origin', '*');
    this.http.post('http://127.0.0.1/ratify/update_username.php',JSON.stringify(this.username), {headers:headers,withCredentials: true}).subscribe((response: any)=>{
     console.log(response);
     if(response['status'] == 'success'){
      this.toast(response['status'], 'success');
      this.user_name = response['new'];
     }
     else{
      this.toast(response['status'], 'danger');
     }
   });
  
}

//updating password
updatePassword(){
  var headers = new HttpHeaders();
   headers.append('Access-Control-Allow-Origin', '*');
   const password={
    "new_pass" : this.new_pass,
    "old_pass" : this.old_pass,
   }
   this.http.post('http://127.0.0.1/ratify/update_password.php',JSON.stringify(password), {headers:headers,withCredentials: true}).subscribe((response: any)=>{
    console.log(response);
    if(response['status'] == 'Password Changed'){
      this.toast(response['status'], 'success');
     }
     else{
      this.toast(response['status'], 'danger');
     }
   
  });
}

//logging out
async logout(){
  let alert = this.alertCtrl.create({
    header: 'Logout',
    buttons: [
      {
        text: 'Cancel',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      },
      {
        text: 'Logout',
        handler: () => {
           var headers = new HttpHeaders();
            headers.append('Access-Control-Allow-Origin', '*');
            this.http.post('http://127.0.0.1/ratify/logout.php', JSON.stringify(this.username), {headers:headers,withCredentials: true}).subscribe((response: any)=>{
            console.log(response);
            this.close();
            this.route.navigate(['home']);
            this.toast('Logged Out Successfully', 'success');
       });
        }
      }
    ]
  });
(await alert).present();
  
}

//deleting account
async delete(){
  let alert = this.alertCtrl.create({
    header: 'Delete Account',
    message: 'Are you sure you want to permanently delete this account?',
    buttons: [
      {
        text: 'Cancel',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
          this.close();
        }
      },
      {
        text: 'Delete',
        handler: () => {
          var headers = new HttpHeaders();
          headers.append('Access-Control-Allow-Origin', '*');
          this.http.post('http://127.0.0.1/ratify/delete.php', JSON.stringify(this.username), {headers:headers,withCredentials: true}).subscribe((response: any)=>{
            console.log(response);
            this.close();
            this.route.navigate(['home']);
            this.toast('User Permanently Deleted', 'danger');
  });
        }
      }
    ]
  });
  (await alert).present();

}
}
