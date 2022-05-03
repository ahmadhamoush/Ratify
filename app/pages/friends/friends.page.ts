import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GetUserDetailsService } from 'src/app/apis/get-user-details.service';
@Component({
  selector: 'app-friends',
  templateUrl: './friends.page.html',
  styleUrls: ['./friends.page.scss'],
})

export class FriendsPage implements OnInit {
  friends : any[];

  ionViewWillEnter(){
    this.user.getFriends().subscribe(response =>{
      for(let i =0;i<Object.keys.length;i++){
        this.friends = response;
      }      console.log(this.friends);
    })
  }

  constructor(private http :HttpClient, private user:GetUserDetailsService) { }

  ngOnInit() {

  }

}
