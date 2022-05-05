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

  friends : any[]; //where the friends will be stored
  //where user clicked details will be stored
  username_clicked : string;
  name_clicked : string;
  image_clicked : string;

  ionViewWillEnter(){
    //getting current user's friends
    var nofriends = document.getElementById('nofriends');
    this.user.getFriends().subscribe(response =>{
      //showing no friends if current user has no friends
      if(response['status'] ==='no friends'){
       nofriends.style.display='block';
       console.log(response);
      }else{
        //storing friends in array
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
    //creating modal displaying optios for selected friend
    this.modalCtrl.create({
      component: FriendOptionsComponent,
      //storing data in props to be used in this modal
      componentProps : {'username' : this.username_clicked, 'name':this.name_clicked, 'image':this.image_clicked},
      cssClass:'friendOptions',
      swipeToClose:true,
    }).then(res =>{
      res.present();
    })
    
  }
  option(event){
    //getting selected user details
    var details = event.srcElement.title.split('?');
    this.username_clicked = details[0];
    this.name_clicked = details[1];
    this.image_clicked = details[2];
    
  }
  //updating friends list on refresh
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
