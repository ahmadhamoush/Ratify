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
  //user details
  username: any;
  name: any;
  image: any;
  //rates
  cute: any;
  personality: any;
  hot: any;
  social: any;
  friendly: any;
  fun : any;
  total_rates : any; 

  logged_user : boolean ; //true if user is current user, false otherwise
  pending : boolean = false; //true if request is pending, false otherwise



  constructor(private route :Router, private user : GetUserDetailsService, private http : HttpClient) { }

  ionViewWillEnter() {
    //getting data from previous page
    this.username = history.state.username;
    this.name = history.state.name;
    this.image = history.state.image;
    this.logged_user = history.state.logged_user;

    //removing add friend if user is logged
    if(this.logged_user){
    document.getElementById('friend_btn').style.opacity="0";
    }else{
      document.getElementById('friend_btn').style.opacity ="1";
    }
    //getting rates from api
    this.user.getRates(this.username).subscribe(rates =>{
      //setting rates to 0 if  user has no rates
      if(rates['status']=== 'no rates'){
        this.total_rates = 0;
        this.cute = 0;
        this.personality = 0;
        this.hot = 0;
        this.social =0;
        this.fun = 0;
        this.friendly =0;
      }else{
        //storing rates in variables and divding by 100 to be displayed in progress bar
        this.total_rates = rates['total_rates']/100;
        this.cute = rates['cute']/100;
        this.personality = rates['personality']/100;
        this.hot = rates['hot']/100;
        this.social = rates['social']/100;
        this.fun = rates['fun']/100;
        this.friendly = rates['friendly']/100;
      }
      console.log(rates);
    });
    
    //getting friend reuqest status and changing styles based on status
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

  //adding friend and changing displayed status to pending
  addFriend(){
    this.http.post('http://127.0.0.1/ratify/add_friend.php', JSON.stringify(this.username), {withCredentials:true}).subscribe((respoonse : any)=>{
      var btn = document.getElementById('friend_btn');
      btn.innerHTML = 'Pending';
      this.pending = true;
      console.log(respoonse);
    })
  }

//ion-tab options
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
