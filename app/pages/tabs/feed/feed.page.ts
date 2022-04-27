import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ModalController } from '@ionic/angular';
import { RatingPage } from '../rating/rating.page';
import { GetUserDetailsService } from 'src/app/apis/get-user-details.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.page.html',
  styleUrls: ['./feed.page.scss'],
})

export class FeedPage implements OnInit {

  users :any [] =[];
  username : any;
 
 
  constructor(private http : HttpClient, private modalCtrl : ModalController, private userDetails : GetUserDetailsService) { }
   

  ngOnInit() {
 
  }
  ionViewWillEnter(){
    this.createFeed();
    this.userDetails.getName().subscribe(data=>{
      this.username = data;
    })
  }
 


  createFeed(){

   this.userDetails.getAllUsers().subscribe((response :any)=>{
      let users_list = [];

    var users_length = Object.keys(response).length;

      while(users_list.length < users_length){
         var random = Math.floor(Math.random() * users_length) + 0;
      if(users_list.indexOf(random) === -1) {
        users_list.push(random);
      }
  }
      for (let index = 0; index <users_length ; index++) {
      
        this.users[index] = response[users_list[index]];
 
      }
      console.log(this.users);  
      console.log(users_list);
    });
  }



  startRating(event){
    var details = event.target.alt.split(' ');
    var username = details[0];
    var name = details[1] + ' ' + details[2];
      console.log(username);
      console.log(name);
    setTimeout(()=>{
      this.modalCtrl.create({
        component: RatingPage,
        cssClass: 'fullscreen',
        componentProps: {
          'username': username,
          'name': name,
          'image' : event.target.src
        },
        swipeToClose:true,
      }).then(res =>{
        res.present();
      })
    },300);
  
  
  }
  
}
