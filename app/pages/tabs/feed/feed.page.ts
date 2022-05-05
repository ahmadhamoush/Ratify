import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ModalController } from '@ionic/angular';
import { RatingPage } from '../rating/rating.page';
import { GetUserDetailsService } from 'src/app/apis/get-user-details.service';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.page.html',
  styleUrls: ['./feed.page.scss'],
})

export class FeedPage implements OnInit {
  //where all users will be stored except for logged user
  users :any [] =[];
  //user details
  username : any;
  logged_in : boolean;
 
  constructor(private http : HttpClient, private modalCtrl : ModalController, private userDetails : GetUserDetailsService,
    private toastCtrl:ToastController, private route:Router) { }

  ngOnInit() {
 
  }
   ionViewWillEnter(){
     //checking if current user is logged in
    this.userDetails.isLoggedIn()
    .subscribe(data => {
        this.logged_in = data;
    });
    setTimeout(async ()=>{
      if(!this.logged_in){
        //redirecting to homepage if current user session has expired
        this.route.navigate(['home']);
        //presenting session expired toast
        const toast =  this.toastCtrl.create({
          message : 'Session Expired. Please Login Again',
          color : 'danger',
          duration: 2000,
        });
        (await toast).present();
      };
    },1000)
    //calling createFeed function when view is entered
    this.createFeed();
    //getting current user's username
    this.userDetails.getName().subscribe(data=>{
      //storing username
      this.username = data;
    })
  }
  //creating feed
  createFeed(){
   this.userDetails.getAllUsers().subscribe((response :any)=>{
    let users_list = []; //where random numbers will be stored
    var users_length = Object.keys(response).length; //getting length from count of object keys

      while(users_list.length < users_length){
          //generating random number to display users randomly
         var random = Math.floor(Math.random() * users_length) + 0;
         //checking if random index exits or not, and adding the random integer to users list array
      if(users_list.indexOf(random) === -1) {
        users_list.push(random);
      }
  }
      for (let index = 0; index <users_length ; index++) {
         //storing random users in users array
        this.users[index] = response[users_list[index]];
 
      }
      console.log(this.users);  
      console.log(users_list);
    });
  }

  startRating(event){
    //getting clicked user's details
    var details = event.target.alt.split(' ');
    var username = details[0];
    var name = details[1] + ' ' + details[2];
    console.log(username);
    console.log(name);
    //creating and presenting the rating page modal
    setTimeout(()=>{
      this.modalCtrl.create({
        component: RatingPage,
        cssClass: 'fullscreen',
        //storing clicked user's details to be used in the rating modal
        componentProps: {
          'username': username,
          'name': name,
          'image' : event.target.src
        },
        swipeToClose:true,
      }).then(res =>{
        //presenting the rating modal
        res.present();
      })
    },300);
  
  }
  
}
