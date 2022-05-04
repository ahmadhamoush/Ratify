import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GetUserDetailsService } from 'src/app/apis/get-user-details.service';
import { ModalController } from '@ionic/angular';
import { FriendOptionsComponent } from 'src/app/friend-options/friend-options.component';
import { Router } from '@angular/router';
@Component({
  selector: 'app-friends',
  templateUrl: './friends.page.html',
  styleUrls: ['./friends.page.scss'],
})

export class FriendsPage implements OnInit {
  friends : any[];
  username_clicked : string;
  name_clicked : string;
  image_clicked : string;

  ionViewWillEnter(){
    var nofriends = document.getElementById('nofriends');
    this.user.getFriends().subscribe(response =>{
      if(response['status'] ==='no friends'){
       nofriends.style.display='block';
      }else{
        nofriends.style.display='none';
        for(let i =0;i<Object.keys.length;i++){
          this.friends = response;
        }
      }
            console.log(this.friends);
    })
  }

  constructor(private http :HttpClient, private user:GetUserDetailsService, private modalCtrl:ModalController,
    private route:Router) { }

  ngOnInit() {

  }

  friendOptions(){
    this.modalCtrl.create({
      component: FriendOptionsComponent,
      componentProps : {'username' : this.username_clicked, 'name':this.name_clicked, 'image':this.image_clicked},
      cssClass:'friendOptions',
      swipeToClose:true,
    }).then(res =>{
      res.present();
    })
    
  }
  option(event){
    var details = event.srcElement.title.split('?');
    this.username_clicked = details[0];
    this.name_clicked = details[1];
    this.image_clicked = details[2];
    
  }
  refresh(event){
    var nofriends = document.getElementById('nofriends');
    this.user.getFriends().subscribe(response =>{
      if(response['status'] ==='no friends'){
       nofriends.style.display='block';
       this.friends = [];
      }else{
        nofriends.style.display='none';
        for(let i =0;i<Object.keys.length;i++){
          this.friends = response;
        }
      }
            console.log(this.friends);
    })
    setTimeout(() => {
      console.log('Page Refreshed');
      event.target.complete();
    }, 500);
  }

}
