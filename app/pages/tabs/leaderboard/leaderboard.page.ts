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
  constructor(private user :GetUserDetailsService, private route:Router,private toastCtrl:ToastController) { }

  ngOnInit() {
  }
  async ionViewWillEnter(){
    this.user.isLoggedIn()
    .subscribe(data => {
        this.logged_in = data;
    });
      if(!this.logged_in){
        this.route.navigate(['home']);
        const toast =  this.toastCtrl.create({
          message : 'Session Expired. Please Login Again',
          color : 'danger',
          duration: 2000,
        });
        (await toast).present();
      };
    }
}
