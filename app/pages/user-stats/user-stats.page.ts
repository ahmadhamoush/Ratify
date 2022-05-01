import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GetUserDetailsService } from 'src/app/apis/get-user-details.service';
import { HttpClient } from '@angular/common/http';

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

  pending : boolean = false;



  constructor(private route :Router, private user : GetUserDetailsService, private http : HttpClient) { }

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
    });
    this.user.getFriendRequestStatus(this.username).subscribe(response =>{
      console.log(response);
      var btn = document.getElementById('friend_btn');
      if(response['status'] === 'Pending'){
        btn.innerHTML = 'Pending';
        this.pending = true;
      }
      else if(response['status'] === 'Already Pending'){
        btn.innerHTML = 'Pending';
        this.pending = true;
      }
      else if(response['status'] === 'Friends'){
        btn.innerHTML = 'Friends';
        this.pending = true;
      }
      else{
        this.pending = false;
        btn.innerHTML = 'Add Friend';
      }
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
addFriend(){
  this.http.post('http://127.0.0.1/ratify/add_friend.php', JSON.stringify(this.username), {withCredentials:true}).subscribe((respoonse : any)=>{
    var btn = document.getElementById('friend_btn');
    btn.innerHTML = 'Pending';
    this.pending = true;
    console.log(respoonse);
  })
}
}
