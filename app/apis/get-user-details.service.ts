import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetUserDetailsService {

  constructor(private http :HttpClient) { }
  
  getImage(){
    return this.http.get('http://127.0.0.1/ratify/user_details.php', {withCredentials:true})
    .pipe(map((response: any) => response['image']));
  }
  getUsername(){
    return this.http.get('http://127.0.0.1/ratify/user_details.php', {withCredentials:true})
    .pipe(map((response: any) => response['username']));
  }
  getName(): Observable<any> {
    return this.http.get('http://127.0.0.1/ratify/user_details.php', {withCredentials:true})
    .pipe(map((response: any) => response['name']));
   }
   isLoggedIn(): Observable<any> {
    return this.http.get('http://127.0.0.1/ratify/user_details.php', {withCredentials:true})
    .pipe(map((response: any) => response['logged_in']));
   }
   getRates(username) : Observable<any>{
     return this.http.post(`http://127.0.0.1/ratify/get_users_rates.php?username=${username}`, JSON.stringify(username), {withCredentials:true})
    .pipe(map((response:any)=>response));

   }
   getAllUsers() : Observable<any>{
    return this.http.post(`http://127.0.0.1/ratify/get_users.php`, {withCredentials:true})
   .pipe(map((response:any)=>response));
  }
  getFriendRequestStatus(username) : Observable<any>{
    return this.http.post(`http://127.0.0.1/ratify/friend_request_status.php?username=${username}`, JSON.stringify(username), {withCredentials:true})
   .pipe(map((response:any)=>response));

  }
  getFriendRequests() : Observable<any>{
    return this.http.get(`http://127.0.0.1/ratify/get_friend_requests.php`, {withCredentials:true})
   .pipe(map((response:any)=>response));

  }
  getFriends() : Observable<any>{
    return this.http.get('http://127.0.0.1/ratify/get_friends.php', {withCredentials:true})
    .pipe(map((response:any)=>response));
  }
  getFriendsLeaderBoard() : Observable<any>{
    return this.http.get('http://127.0.0.1/ratify/friends_leaderboard.php', {withCredentials:true})
    .pipe(map((response:any)=>response));
  }
  getTop10Rated() : Observable<any>{
    return this.http.get('http://127.0.0.1/ratify/top_10_rated.php', {withCredentials:true})
    .pipe(map((response:any)=>response));
  }
}
