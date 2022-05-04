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
  
  displayedImage : string;
  name : string;
  username : string;
  logged_in : boolean;
  total_rates : number;
  requests :any [] =[];
  confirm_friend:string;
  requested : string;
 

  constructor(private http : HttpClient, private modalCtrl : ModalController, private user : GetUserDetailsService, private route :Router,
    private toastCtrl :ToastController) { }
  
   
  ngOnInit() {
    
    }
   async ionViewWillEnter(){
      this.fetchUserData();
      if(!this.logged_in){
        this.route.navigate(['home']);
        const toast =  this.toastCtrl.create({
          message : 'Session Expired. Please Login Again',
          color : 'danger',
          duration: 2000,
        });
        (await toast).present();
      }
     setTimeout(()=>{
        this.user.getRates(this.username).subscribe(rates => {
          console.log(rates);
          this.total_rates = rates['total_rates'];
        });
        console.log(this.username);
     },100);
    this.fetchFriendRequests();
    }
  settings(){
   this.modalCtrl.create({
     component: SettingsModalPage,
     swipeToClose:true,
   }).then(res =>{
     res.present();
   })
  }
  friends(){
    this.route.navigate(['friends']);
   }

  refresh(event){
    this.fetchUserData();
    this.fetchFriendRequests();
    setTimeout(() => {
      console.log('Page Refreshed');
      event.target.complete();
    }, 500);
  }

  fetchUserData(){
    this.user.getUsername()
    .subscribe(data => {
        this.username = data;
    });

    this.user.getName()
    .subscribe(data => {
        this.name = data;
    });

    this.user.getImage()
    .subscribe(data => {
        this.displayedImage = data;
    });
    this.user.isLoggedIn()
    .subscribe(data => {
        this.logged_in = data;
    });
  }
  checkStats(){
    setTimeout(()=>{
     setTimeout(()=>{
      this.route.navigate(['user-stats'], {state : {username: this.username, name:this.name,image:this.displayedImage, logged_user: true}});
     },300);
    },300);
  }

  fetchFriendRequests(){
    var no_friends = document.getElementById('no_friends');
    this.user.getFriendRequests().subscribe(requests =>{
      if(requests['status']==='no friend requests'){
        no_friends.style.display = 'block';
      }else{
        no_friends.style.display = 'none';
        for(let i =0;i<Object.keys(requests).length;i++){
          this.requests = requests;
         }
         
      }
      console.log(this.requests); 
     })
  }
  accept_friend(event){
    var card = event.srcElement.previousSibling;
    var btn1 = event.srcElement;
    var btn2 = event.srcElement.nextSibling;
    card.classList.add('moveUp');
    btn1.classList.add('moveUp');
    btn2.classList.add('moveUp'); 
    this.requested = event.srcElement.title;
    this.confirm_friend = 'accept';
    const request ={
      "status" : this.confirm_friend,
      "requested": this.requested
    }

   
    this.http.post('http://127.0.0.1/ratify/confirm_friend_request.php', JSON.stringify(request),{withCredentials:true}).subscribe((response:any)=>{
      console.log(response);
    })
  }
  decline_friend(event){
    var card = event.srcElement.previousSibling.previousSibling;
    var btn1 = event.srcElement;
    var btn2 = event.srcElement.previousSibling;
    card.classList.add('moveUp');
    btn1.classList.add('moveUp');
    btn2.classList.add('moveUp');
    this.requested = event.srcElement.title;
    this.confirm_friend = 'decline';
    const request ={
      "status" : this.confirm_friend,
      "requested": this.requested
    }
    this.http.post('http://127.0.0.1/ratify/confirm_friend_request.php', JSON.stringify(request),{withCredentials:true}).subscribe((response:any)=>{
      console.log(response);
    })
  }
}
