import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.page.html',
  styleUrls: ['./rating.page.scss'],
})
export class RatingPage implements OnInit {
  
  constructor(private modalCtr : ModalController) { }

  ngOnInit() {
    this.cute = 0;
    this.personality = 0;
    this.hot = 0;
  }
  close(){
    this.modalCtr.dismiss();
  }
    cute : any;
    personality : any;
    hot : any;

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
      console.log('How Cute? : ' + this.cute +"%");
      console.log('Personality : ' + this.personality +"%");
      console.log('How Hot? : ' + this.hot +"%");
      console.log(stars);

 
  }

}
