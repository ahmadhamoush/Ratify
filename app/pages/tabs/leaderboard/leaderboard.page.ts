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

  logged_in:boolean;
  friends_leaderboard : any[];
  top_10 : any[];
  top_rated : any[];
  constructor(private user :GetUserDetailsService, private route:Router,private toastCtrl:ToastController) { }

  async ngOnInit() {
    this.user.isLoggedIn()
    .subscribe(data => {
        this.logged_in = data;
    });
    setTimeout(async ()=>{
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
this.user.getFriendsLeaderBoard().subscribe(friends=>{
  this.friends_leaderboard = friends;
  console.log(this.friends_leaderboard); 
});
this.user.getTop10Rated().subscribe(users=>{
  this.top_10 = users;
  this.top_rated = users[0];
  console.log(this.top_10); 
  console.log(this.top_rated); 
})
  }

}
