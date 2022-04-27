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
    personality : number;
    hot : number;
    social : number;
    friendly: number
    fun : number;
    rated_user : string;
    rated_name : string;
    rated_image : string;

  ngOnInit() {
    this.cute = 0;
    this.personality = 0;
    this.hot = 0;
    this.social = 0;
    this.friendly =0;
    this.fun =0;
    this.rated_user = this.navParams.get('username');
    this.rated_name = this.navParams.get('name');
    this.rated_image = this.navParams.get('image');
  }
  close(){
    this.modalCtr.dismiss();
  }

  async toastMessage(message, color){
    const toast = this.toastCtrl.create({
      message : message,
      duration : 5000,
      color: color,
    });
    (await toast).present(); 
  }
   

  starClicked(event){
    var stars = document.querySelectorAll(('.icons ion-icon'));
    var star = event.target;
      if(star.name == 'star-outline'){
        star.style.color = 'gold';
        star.name = 'star';
        }else if(star.name == 'star'){
        star.style.color = '#eee';
        star.name = 'star-outline';
        }

    //How Cute?

      for(let i =0; i<5;i++){
        if(star ==stars[i] && star.name =='star'){
          this.cute+=20;   
      }
      if(star ==stars[i] && star.name =='star-outline'){
        this.cute-=20;   
    }
    
      }
         //personality?

         for(let i =5; i<10;i++){
          if(star ==stars[i] && star.name =='star'){
            this.personality+=20;   
        }
        if(star ==stars[i] && star.name =='star-outline'){
          this.personality-=20;   
      }
      
        }
            //How Hot?

      for(let i =10; i<15;i++){
        if(star ==stars[i] && star.name =='star'){
          this.hot+=20;   
      }
      if(star ==stars[i] && star.name =='star-outline'){
        this.hot-=20;   
    }
    
      }
            //How Social?

            for(let i =15; i<20;i++){
              if(star ==stars[i] && star.name =='star'){
                this.social+=20;   
            }
            if(star ==stars[i] && star.name =='star-outline'){
              this.social-=20;   
          }
          
            }

              //How Friendly?

              for(let i =20; i<25;i++){
                if(star ==stars[i] && star.name =='star'){
                  this.friendly+=20;   
              }
              if(star ==stars[i] && star.name =='star-outline'){
                this.friendly-=20;   
            }
            
              }

              //How Fun?

              for(let i =25; i<30;i++){
                if(star ==stars[i] && star.name =='star'){
                  this.fun+=20;   
              }
              if(star ==stars[i] && star.name =='star-outline'){
                this.fun-=20;   
            }
            
              }
          
  }

  async upload_rates(){

    var headers = new HttpHeaders();
    headers.append('Access-Control-Allow-Origin', "*");
    const rates = {
      "cute" : this.cute,
      'personality' : this.personality,
      'hot' : this.hot,
      'social' : this.social,
      'friendly' : this.friendly,
      'fun' : this.fun,
      'rated' : this.rated_user,
    }

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
  checkRatings(){
    setTimeout(()=>{
     this.close();
     setTimeout(()=>{
      this.route.navigate(['user-stats'], {state : {username: this.rated_user, name:this.rated_name,image:this.rated_image}});
     },300);
    },300);
  }

}
