import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GetUserDetailsService } from 'src/app/apis/get-user-details.service';

@Component({
  selector: 'app-user-stats',
  templateUrl: './user-stats.page.html',
  styleUrls: ['./user-stats.page.scss'],
})
export class UserStatsPage{

  username: any;
  name: any;
  image: any;
  cute: any;
  personality: any;
  hot: any;
  social: any;
  friendly: any;
  fun : any;
  total_rates : any;

  constructor(private route :Router, private user : GetUserDetailsService) { }

  ionViewWillEnter() {
    this.username = history.state.username;
    this.name = history.state.name;
    this.image = history.state.image;
    this.user.getRates(this.username).subscribe(rates =>{
      this.total_rates = rates['total_rates']/100;
      this.cute = rates['cute']/100;
      this.personality = rates['personality']/100;
      this.hot = rates['hot']/100;
      this.social = rates['social']/100;
      this.fun = rates['fun']/100;
      this.friendly = rates['friendly']/100;
      console.log(rates);
    })
  }
leaderboard(){
  this.route.navigate(['../homepage/leaderboard']);
}
search(){
  this.route.navigate(['../homepage/search']);
}
feed(){
  this.route.navigate(['../homepage/feed']);
}
profile(){
  this.route.navigate(['../homepage/profile']);
}
}
