import { Component, OnInit } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GetUserDetailsService } from 'src/app/apis/get-user-details.service';
import { NavParams } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
@Component({
  selector: 'app-rating',
  templateUrl: './rating.page.html',
  styleUrls: ['./rating.page.scss'],
})
export class RatingPage implements OnInit {
  
  constructor(private modalCtr : ModalController, private http : HttpClient, private user : GetUserDetailsService,
    private navParams : NavParams, private toastCtrl : ToastController, private alertCtrl : AlertController,
    private route : Router) { }

    cute : number; 
    cute_bool: boolean[];
    personality : number;
    personality_bool: boolean[];
    hot : number;
    hot_bool: boolean[];
    social : number;
    social_bool: boolean[];
    friendly: number;
    friendly_bool: boolean[];
    fun : number;
    fun_bool: boolean[];
    rated_user : string;
    rated_name : string;
    rated_image : string;

    logged_in:boolean;

  ngOnInit() {
    this.cute = 0; //initialzing rate =0
    this.cute_bool = []; // storing active stars
    this.personality = 0;
    this.personality_bool = []; 
    this.hot = 0;
    this.hot_bool = [];
    this.social = 0;
    this.social_bool = [];
    this.friendly =0;
    this.friendly_bool = [];
    this.fun =0;
    this.fun_bool = [];
    this.rated_user = this.navParams.get('username'); //getting rated user details
    this.rated_name = this.navParams.get('name'); 
    this.rated_image = this.navParams.get('image');
  }
   ionViewWillEnter(){
    this.user.isLoggedIn()
    .subscribe(data => {
        this.logged_in = data;
    });
    setTimeout(async ()=>{
      if(!this.logged_in){
        this.route.navigate(['home']);
        const toast =  this.toastCtrl.create({
          message : 'Session Expired. Please Login Again',
          color : 'danger',
          duration: 2000,
        });
        (await toast).present();
      };
    },1000);
    }
  close(){
    this.modalCtr.dismiss(); //closing modal after rate submission
  }

  async toastMessage(message, color){
    const toast = this.toastCtrl.create({
      message : message,
      duration : 3000,
      color: color,
    });
    (await toast).present(); //presenting toast message after rate submission
  }
  
  //will be used for each rate
  calculateRate(starIndex: number,endIndex: number, rate: number, rateBool: boolean[]){
    var stars = document.querySelectorAll(('.icons ion-icon'));
    var star = event.target;

    for(let i =starIndex; i<endIndex;i++){    
      if(star==stars[i]){ //checking if star clicked is equal to the rate category
      setTimeout(()=>{
        if(stars[i].getAttribute('name')=='star'){
          stars[i].classList.add('selected'); // adding selected class if clicked star is active
          for (let j= starIndex; j <i; j++) {  
              stars[j].setAttribute('name', 'star');  //changing style of star if  to selected
              stars[j].setAttribute('style', 'color:gold'); 
              stars[j].classList.add('selected');
           }       
        }
         else if(stars[i].getAttribute('name')=='star-outline'){
           for (let j = i; j < endIndex; j++) {
               stars[j].setAttribute('name', 'star'); 
               stars[j].setAttribute('style', 'color:gold');
               stars[j].classList.remove('selected'); //removing selected class if star is not active
               for (let x= i; x < endIndex; x++) {
                 stars[x].setAttribute('name', 'star-outline'); //changing style of star if  to not selected
                 stars[x].setAttribute('style', 'color:white');
                 stars[x].classList.remove('selected');
           }
           }     
         }
       
      },100);
  
    }    
    if(stars[i].classList.contains('selected')){ //checking if selected star has a class named selected
      rateBool[i]= true; 
    }
    else{
      rateBool[i]= false;  
  }
        };
        let active_list = []; //will contain true for every selected star
        for(let i =starIndex; i<rateBool.length;i++){
          if(rateBool[i]){
            active_list[i] = rateBool[i]; 
          }
        }
       rate = 0;
        for(let i =starIndex;i<active_list.length;i++){ 
          rate+=20; //adding 20 for each selected star
        }
        return rate;
  }
   
  starClicked(event){
    var stars = document.querySelectorAll(('.icons ion-icon')); //getting all stars
    var star = event.target; //getting clicked star
      if(star.name == 'star-outline'){ //changing style to selected star
        star.style.color = 'gold';
        star.name = 'star';
        }else if(star.name == 'star'){  //changing style to non selected star
        star.style.color = '#eee';
        star.name = 'star-outline';
        } 

        //How Cute
        this.calculateRate(0,5,this.cute,this.cute_bool);
        //Personality
        this.calculateRate(5,10,this.personality,this.personality_bool);
        //How How
        this.calculateRate(10,15,this.hot,this.hot_bool);
        //How Social
        this.calculateRate(15,20,this.social,this.social_bool);
        //How Friendly
        this.calculateRate(20,25,this.friendly,this.friendly_bool);
        //How Fun
        this.calculateRate(25,30,this.fun,this.fun_bool);
  }

  async upload_rates(){

    var headers = new HttpHeaders();
    headers.append('Access-Control-Allow-Origin', "*");
    //filling rate data to be uploaded
    const rates = {
      "cute" : this.calculateRate(0,5,this.cute,this.cute_bool),
      'personality' : this.calculateRate(5,10,this.personality,this.personality_bool),
      'hot' : this.calculateRate(10,15,this.hot,this.hot_bool),
      'social' : this.calculateRate(15,20,this.social,this.social_bool),
      'friendly' : this.calculateRate(20,25,this.friendly,this.friendly_bool),
      'fun' : this.calculateRate(25,30,this.fun,this.fun_bool),
      'rated' : this.rated_user,
    }

    //alerting user that he can rate the person only once
    let alert  = this.alertCtrl.create({
      header : 'Reminder',
      message: 'You can only rate ' + this.rated_user + ' once ',
      buttons :[
        {
          text : 'Cancel',
          role : 'cancel',

        },
        { 
          text : 'Rate',
          handler: ()=>{
            //uplloading rates
            this.http.post('http://127.0.0.1/ratify/upload_rates.php', JSON.stringify(rates), {headers:headers, withCredentials : true}).subscribe((response : any)=>{
           if(response['status']== 'success'){
             this.toastMessage(this.rated_user +' Rated Successfully', 'success');
             this.modalCtr.dismiss();
             console.log(response);
            }
            else{
            this.toastMessage(response['status'] + this.rated_user, 'danger');
            console.log(response);
          }
            });
          }
        }
      ]
    });
    (await alert).present();
  }

  //navigating to user-stats page on checkRatings button click
  checkRatings(){
    setTimeout(()=>{
     this.close();
     setTimeout(()=>{
      this.route.navigate(['user-stats'], {state : {username: this.rated_user, name:this.rated_name,image:this.rated_image}});
     },300);
    },300);
  }

}
