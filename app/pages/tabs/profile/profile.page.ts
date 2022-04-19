import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ModalController } from '@ionic/angular';
import { SettingsModalPage } from 'src/app/pages/settings-modal/settings-modal.page';
import { GetUserDetailsService } from 'src/app/apis/get-user-details.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})

export class ProfilePage implements OnInit {
  
  displayedImage : string;
  name : string;
  username : string;
 

  constructor(private http : HttpClient, private modalCtrl : ModalController, private user : GetUserDetailsService) { }
  
   
  ngOnInit() {
    
    }
    ionViewWillEnter(){
      this.fetchUserData();
      this.http.get('http://127.0.0.1/ratify/get_users_rates.php', {withCredentials:true}).subscribe((response:any)=>{
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

  refresh(event){
    this.fetchUserData();
    setTimeout(() => {
      console.log('Page Refreshed');
      event.target.complete();
    }, 500);
  
  }

  fetchUserData(){
    this.user.getUsername()
    .subscribe(data => {
        this.username = data;
    });

    this.user.getName()
    .subscribe(data => {
        this.name = data;
    });

    this.user.getImage()
    .subscribe(data => {
        this.displayedImage = data;
    });
  }

}
