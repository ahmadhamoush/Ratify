import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { GetUserDetailsService } from 'src/app/apis/get-user-details.service';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.page.html',
  styleUrls: ['./leaderboard.page.scss'],
})
export class LeaderboardPage implements OnInit {

  //true if user session not expired, false otherwise
  logged_in:boolean;
  //where friends will be stored
  friends_leaderboard : any[];
  //where top 10 rated users will be stored
  top_10 : any[];
  //where top rated user will be stored
  top_rated : any[];

  //user details
  username : string;
  name : string;
  image : string;
  constructor(private user :GetUserDetailsService, private route:Router,private toastCtrl:ToastController) { }

  async ngOnInit() {
    this.user.isLoggedIn()
    .subscribe(data => {
        this.logged_in = data;
    });
    setTimeout(async ()=>{
      //redirecting user to homepage if session has expired
      if(!this.logged_in){
        this.route.navigate(['home']);
        const toast =  this.toastCtrl.create({
          message : 'Session Expired. Please Login Again',
          color : 'danger',
          duration: 2000,
        });
        (await toast).present();
      };
    },1000)
  }
  ionViewWillEnter(){
    //getting friends in ascending order
  this.user.getFriendsLeaderBoard().subscribe(friends=>{
    //storing friends 
  this.friends_leaderboard = friends;
  console.log(this.friends_leaderboard); 
});
   //getting top 10 rated users in ascending order
this.user.getTop10Rated().subscribe(users=>{
    //storing top 10 users 
  this.top_10 = users;
  //storing top rated user
  this.top_rated = users[0];
  console.log(this.top_10); 
  console.log(this.top_rated); 
})
  }
  viewProfile(event){
    //getting user clicked details 'stored in title'
  var details =event.srcElement.title.split('?');
  this.username = details[0]
  this.name = details[1];
  this.image = details[2];
    //navigating to user's clicked stats page
    this.route.navigate(['user-stats'], {state : {username: this.username, name:this.name,image:this.image}});
  }

}
