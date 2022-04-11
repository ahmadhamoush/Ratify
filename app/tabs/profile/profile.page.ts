import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})

export class ProfilePage implements OnInit {
  
  displayedImage : string;
  constructor(private http : HttpClient) { }
  
  ngOnInit() {
    this.http.get('http://127.0.0.1/ratify/get_image.php', {withCredentials:true}).subscribe((response:any)=>{
    this.displayedImage = response;
    });
  }

}
