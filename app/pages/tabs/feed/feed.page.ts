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
    this.createFeed();
    this.userDetails.getName().subscribe(data=>{
      this.username = data;
    })
    
  }
 


  createFeed(){
    
  
    var headers = new HttpHeaders();
    headers.append('Access-Control-Allow-Origin', '*');
    this.http.get('http://127.0.0.1/ratify/get_users.php',{headers:headers}).subscribe((response :any)=>{


      for (let index = 0; index < Object.keys(response).length; index++) {
        
        this.users = response;
      }
      console.log(this.users);
      
     
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
