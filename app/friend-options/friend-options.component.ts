import { Component, OnInit } from '@angular/core';
import { NavParams } from '@ionic/angular';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-friend-options',
  templateUrl: './friend-options.component.html',
  styleUrls: ['./friend-options.component.scss'],
})
export class FriendOptionsComponent implements OnInit {
  //user details
  username:string;
  name :string;
  image : string;
  
  constructor(private navParams : NavParams, private route :Router, private modalCtrl : ModalController,
    private http :HttpClient) { }

  ngOnInit() {}

  //check profile option
  checkProfile(){
    this.modalCtrl.dismiss();
    //getting user details from component props
    this.username = this.navParams.get('username');
    this.name = this.navParams.get('name');
    this.image = this.navParams.get('image');
    //navigating to user-stats page on click
    this.route.navigate(['user-stats'],{state : {username: this.username, name:this.name,image:this.image}});
  }
  //removing friend 
  removeFriend(){
    //dismissing modal on click
    this.modalCtrl.dismiss();
    //posting removed friend to api
    this.http.post('http://127.0.0.1/ratify/delete_friend.php', JSON.stringify(this.username),{withCredentials:true}).subscribe((response:any)=>{
      console.log(response);
    })
  }
}
