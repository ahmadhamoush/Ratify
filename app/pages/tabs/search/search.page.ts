import { Component, OnInit } from '@angular/core';
import { GetUserDetailsService } from 'src/app/apis/get-user-details.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  searchFilter : any;
  users :any [] =[];
  logged_user : any;
  constructor(private service : GetUserDetailsService) { }

  ngOnInit() {
    
  }
  ionViewWillEnter(){
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

  
  hide(){
    var searchedElements = document.getElementsByTagName('ion-list');
    // searchedElements.style.display='block';
    for(let i =0;i<searchedElements.length;i++){
      searchedElements[i].style.display = 'none';
    }
  }
}

