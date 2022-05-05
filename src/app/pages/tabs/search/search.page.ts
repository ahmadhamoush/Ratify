import { Component, OnInit } from '@angular/core';
import { GetUserDetailsService } from 'src/app/apis/get-user-details.service';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  //where search filter word will be stored
  searchFilter : any;
  //where users will be stored
  users :any [] =[];
  //logged user
  logged_user : any;
  logged_in :boolean; // checking if users session is expired or not

  //searched user's details
  searched_user : any;
  searched_name :any;
  searched_image :any;
  
  constructor(private service : GetUserDetailsService, private route:Router, private toastCtrl:ToastController) { }

  ngOnInit() {
    
  }
  async ionViewWillEnter(){
    this.service.isLoggedIn()
    .subscribe(data => {
      //getting user's logged in status
        this.logged_in = data;
    });
    setTimeout(async ()=>{
      if(!this.logged_in){
        //redirecting to homepage if session has expired
        this.route.navigate(['home']);
        //displaying toast
        const toast =  this.toastCtrl.create({
          message : 'Session Expired. Please Login Again',
          color : 'danger',
          duration: 2000,
        });
        (await toast).present();
      };
    },1000);
    
    //getting user's name from api
    this.service.getName().subscribe(response=>{
      this.logged_user = response;
    })

    //getting all users from api
    this.service.getAllUsers().subscribe((response : any)=>{
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
search(event){
  //getting clicked user's details 'stored in title'
  var details =event.srcElement.title.split('?');
  this.searched_user = details[0]
  this.searched_name = details[1];
  this.searched_image = details[2];
    //navigating to clicked user's stats page
    this.route.navigate(['user-stats'], {state : {username: this.searched_user, name:this.searched_name,image:this.searched_image}});
}
}

