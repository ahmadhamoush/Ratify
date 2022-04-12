import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ModalController } from '@ionic/angular';
import { SettingsModalPage } from 'src/app/settings-modal/settings-modal.page';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})

export class ProfilePage implements OnInit {
  
  displayedImage : string;
  name : string;
  username : string;
 

  constructor(private http : HttpClient, private modalCtrl : ModalController) { }
  
   
  ngOnInit() {
    this.http.get('http://127.0.0.1/ratify/get_image.php', {withCredentials:true}).subscribe((response:any)=>{
    this.displayedImage = response['image'];
    this.name = response['name'];
    this.username = response['username'];
    console.log(response);
    });
  }
  settings(){
   this.modalCtrl.create({
     component: SettingsModalPage,
     swipeToClose:true,
   }).then(res =>{
     res.present();
   })
  }

}
