import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GetUserDetailsService } from 'src/app/apis/get-user-details.service';
import { NavParams } from '@ionic/angular';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.page.html',
  styleUrls: ['./rating.page.scss'],
})
export class RatingPage implements OnInit {
  
  constructor(private modalCtr : ModalController, private http : HttpClient, private user : GetUserDetailsService,
    private navParams : NavParams) { }

  ngOnInit() {
    this.cute = 0;
    this.personality = 0;
    this.hot = 0;
    this.social = 0;
    this.friendly =0;
    this.fun =0;
    this.rated_user = this.navParams.get('username');
  }
  close(){
    this.modalCtr.dismiss();
  }
    cute : number;
    personality : number;
    hot : number;
    social : number;
    friendly: number
    fun : number;
    rated_user : string;

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

  upload_rates(){

    console.log('How Cute? : ' + this.cute +"%");
    console.log('Personality : ' + this.personality +"%");
    console.log('How Hot? : ' + this.hot +"%");
    console.log('How Social? : ' + this.social +"%");
    console.log('How Friendly? : ' + this.friendly +"%");
    console.log('How Fun? : ' + this.fun +"%");

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
    this.http.post('http://127.0.0.1/ratify/upload_rates.php', JSON.stringify(rates), {headers:headers, withCredentials : true}).subscribe((response : any)=>{
      console.log(response);
    })
  }

}
