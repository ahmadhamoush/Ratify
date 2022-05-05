import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ModalController } from '@ionic/angular';
import { SettingsModalPage } from 'src/app/pages/settings-modal/settings-modal.page';
import { GetUserDetailsService } from 'src/app/apis/get-user-details.service';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})

export class ProfilePage implements OnInit {
  //current user details
  displayedImage : string; //profile pic being displayed
  name : string;
  username : string;
  logged_in : boolean;
  //where current user's total rate will be stored
  total_rates : number;
  //where friend requests will be stored
  requests :any [] =[];
  //will be either accept or decline based on what the user clicks
  confirm_friend:string;
  //where the requested user will be stored
  requested : string;
 

  constructor(private http : HttpClient, private modalCtrl : ModalController, private user : GetUserDetailsService, private route :Router,
    private toastCtrl :ToastController) { }
  
   
  ngOnInit() {
    
    }
    ionViewWillEnter(){
      //fetching user data
      this.fetchUserData();
      //checking if user is logged in
      if(!this.logged_in){
        setTimeout(async ()=>{
          if(!this.logged_in){
            //redirecting to homepage if current user session has expired
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
     setTimeout(()=>{
       // getting current user's rates
        this.user.getRates(this.username).subscribe(rates => {
          console.log(rates);
          this.total_rates = rates['total_rates'];
        });
        console.log(this.username);
     },100);
     //fetching friend requests
    this.fetchFriendRequests();
    }
  //creating and presenting settings modal on settings clicked
  settings(){
   this.modalCtrl.create({
     component: SettingsModalPage,
     swipeToClose:true,
   }).then(res =>{
     res.present();
   })
  }
  //navigating to friends page on friends click
  friends(){
    this.route.navigate(['friends']);
   }

   //fetching user data and friend requests on refresh
  refresh(event){
    this.fetchUserData();
    this.fetchFriendRequests();
    setTimeout(() => {
      console.log('Page Refreshed');
      event.target.complete();
    }, 500);
  }

  //getting logged in user data
  fetchUserData(){
    //getting username
    this.user.getUsername()
    .subscribe(data => {
        this.username = data;
    });
    //getting name
    this.user.getName()
    .subscribe(data => {
        this.name = data;
    });
    //getting image
    this.user.getImage()
    .subscribe(data => {
        this.displayedImage = data;
    });
    //getting if user is logged in or not
    this.user.isLoggedIn()
    .subscribe(data => {
        this.logged_in = data;
    });
  }
  checkStats(){
    //navigating to current user's stats page
    setTimeout(()=>{
     setTimeout(()=>{
      this.route.navigate(['user-stats'], {state : {username: this.username, name:this.name,image:this.displayedImage, logged_user: true}});
     },300);
    },300);
  }
  //fetching user's friend requests
  fetchFriendRequests(){
    var no_friends = document.getElementById('no_friends');
    this.user.getFriendRequests().subscribe(requests =>{
      //showing no friend requests if current user has no requests
      if(requests['status']==='no friend requests'){
        no_friends.style.display = 'block';
      }else{ //storing requests
        no_friends.style.display = 'none';
        for(let i =0;i<Object.keys(requests).length;i++){
          this.requests = requests;
         }
      }
      console.log(this.requests); 
     })
  }
  //accepting friend request
  accept_friend(event){
    //animating and moving current user card and details upwards and hiding it
    var card = event.srcElement.previousSibling;
    var btn1 = event.srcElement;
    var btn2 = event.srcElement.nextSibling;
    card.classList.add('moveUp');
    btn1.classList.add('moveUp');
    btn2.classList.add('moveUp'); 
    //storing requested username
    this.requested = event.srcElement.title;
    //setting cofirm friend status to accept
    this.confirm_friend = 'accept';
    //storing request details in object to be posted
    const request ={
      "status" : this.confirm_friend,
      "requested": this.requested
    }

   //posting accept request to api
    this.http.post('http://127.0.0.1/ratify/confirm_friend_request.php', JSON.stringify(request),{withCredentials:true}).subscribe((response:any)=>{
      console.log(response);
    })
  }
  decline_friend(event){
    //animating and moving current user card and details upwards and hiding it
    var card = event.srcElement.previousSibling.previousSibling;
    var btn1 = event.srcElement;
    var btn2 = event.srcElement.previousSibling;
    card.classList.add('moveUp');
    btn1.classList.add('moveUp');
    btn2.classList.add('moveUp');
    //storing requested username
    this.requested = event.srcElement.title;
    //setting cofirm friend status to decline
    this.confirm_friend = 'decline';
    //storing request details in object to be posted
    const request ={
      "status" : this.confirm_friend,
      "requested": this.requested
    }
    //posting decline request to api
    this.http.post('http://127.0.0.1/ratify/confirm_friend_request.php', JSON.stringify(request),{withCredentials:true}).subscribe((response:any)=>{
      console.log(response);
    })
  }
}
