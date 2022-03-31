import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private route: Router) { }

  onClickSignup() {

    var hide = document.getElementById('hide');

    var show = document.getElementById('show');
    hide.classList.toggle('move');

    setTimeout(()=>{
      hide.style.display = 'none';
    }, 500);

    // show.classList.toggle('moveLeft');
    setTimeout(()=>{
      show.classList.toggle('show');
    },500)
    
    setTimeout(()=>{
      show.classList.toggle('startPlace');
    },800)
    

     
}
 

  ngOnInit() {
  }
  
   
}
