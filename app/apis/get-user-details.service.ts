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
   getRates(username) : Observable<any>{
     return this.http.post(`http://127.0.0.1/ratify/get_users_rates.php?username=${username}`, JSON.stringify(username), {withCredentials:true})
    .pipe(map((response:any)=>response));

   }
   getAllUsers() : Observable<any>{
    return this.http.post(`http://127.0.0.1/ratify/get_users.php`, {withCredentials:true})
   .pipe(map((response:any)=>response));

  }
}
