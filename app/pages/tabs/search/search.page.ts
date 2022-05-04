import { Component, OnInit } from '@angular/core';
import { GetUserDetailsService } from 'src/app/apis/get-user-details.service';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  searchFilter : any;
  users :any [] =[];
  logged_user : any;
  logged_in :boolean

  searched_user : any;
  searched_name :any;
  searched_image :any;
  
  constructor(private service : GetUserDetailsService, private route:Router, private toastCtrl:ToastController) { }

  ngOnInit() {
    
  }
  async ionViewWillEnter(){
    this.service.isLoggedIn()
    .subscribe(data => {
        this.logged_in = data;
    });
      if(!this.logged_in){
        this.route.navigate(['home']);
        const toast =  this.toastCtrl.create({
          message : 'Session Expired. Please Login Again',
          color : 'danger',
          duration: 2000,
        });
        (await toast).present();
      };
    
    this.service.getName().subscribe(response=>{
      this.logged_user = response;
    })

    this.service.getAllUsers().subscribe((response : any)=>{
      let users_list = [];

      var users_length = Object.keys(response).length;
  
        while(users_list.length < users_length){
           var random = Math.floor(Math.random() * users_length) + 0;
        if(users_list.indexOf(random) === -1) {
          users_list.push(random);
        }
    }
        for (let index = 0; index <users_length ; index++) {
        
          this.users[index] = response[users_list[index]];
   
        }
        console.log(this.users);
       
        console.log(users_list);
      });
  }
search(event){
  var details =event.srcElement.title.split('?');
  this.searched_user = details[0]
  this.searched_name = details[1];
  this.searched_image = details[2];
    

    this.route.navigate(['user-stats'], {state : {username: this.searched_user, name:this.searched_name,image:this.searched_image}});
  
  
}
}

