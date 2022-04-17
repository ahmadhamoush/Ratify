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
  }
  close(){
    this.modalCtr.dismiss();
  }

  starClicked(event){
    var stars = document.querySelectorAll(('.icons ion-icon'));
    var star = event.target;
    var clicked = true;
    if(clicked){
    star.style.color = 'gold';
    star.name = 'star';
    clicked = false;
    }else{
    star.style.color = '#eee';
    star.name = 'star-outline';
    clicked = true;
    }
  }

}
