import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.page.html',
  styleUrls: ['./feed.page.scss'],
})
export class FeedPage implements OnInit {

  constructor(private http : HttpClient) { }

  ngOnInit() {
    this.createFeed();
  }

  createFeed(){
    var headers = new HttpHeaders();
    headers.append('Access-Control-Allow-Origin', '*');
    this.http.get('http://127.0.0.1/ratify/get_users.php',{headers:headers}).subscribe((response :any)=>{

    console.log(response);
    });
  }
}
