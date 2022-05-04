import { Component, OnInit } from '@angular/core';
import { NavParams } from '@ionic/angular';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { response } from 'express';

@Component({
  selector: 'app-friend-options',
  templateUrl: './friend-options.component.html',
  styleUrls: ['./friend-options.component.scss'],
})
export class FriendOptionsComponent implements OnInit {

  username:string;
  name :string;
  image : string;
  constructor(private navParams : NavParams, private route :Router, private modalCtrl : ModalController,
    private http :HttpClient) { }

  ngOnInit() {}

  checkProfile(){
    this.modalCtrl.dismiss();
    this.username = this.navParams.get('username');
    this.name = this.navParams.get('name');
    this.image = this.navParams.get('image');
    this.route.navigate(['user-stats'],{state : {username: this.username, name:this.name,image:this.image}});
  }
  removeFriend(){
    this.modalCtrl.dismiss();
    this.http.post('http://127.0.0.1/ratify/delete_friend.php', JSON.stringify(this.username),{withCredentials:true}).subscribe((response:any)=>{
      console.log(response);
    })
  }
}
