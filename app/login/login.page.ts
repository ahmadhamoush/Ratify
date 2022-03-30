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

    // var bg = document.getElementById('bg');
    // var hide = document.getElementById('hide');
    // var show = document.getElementById('show');
    // bg.style.top = '-20px';
    // bg.style.height = '800px';
    // bg.style.zIndex= '2';
    // hide.style.display = 'none';
    // show.style.display ="block";
    this.route.navigate(['/sign-up']);
}

  ngOnInit() {
  }
  
   
}
