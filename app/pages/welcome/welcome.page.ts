import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Router } from '@angular/router';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { Directory, Filesystem } from '@capacitor/filesystem';
import { Platform } from '@ionic/angular';

const IMAGE_DIR = 'stored-images';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {

  name : string;
  image : File;
 
 constructor(private http : HttpClient, private route : Router, private platform:Platform) {
    
   }
   url ='';
   selected_file = null;
   onselectedFile(e){
     console.log(e); 
     this.selected_file = e.target.files[0];
     console.log(this.selected_file);
     if(e.target.files){
       var reader = new FileReader();
       reader.readAsDataURL(e.target.files[0]);
       reader.onload=(event:any)=>{
         this.url=event.target.result;
         document.getElementById('pp').style.display ="block";
         document.getElementById('camera_icon').style.display="none";
         document.getElementById('profile_icon').style.display="none";
       }
     }
   }
   user_name = history.state.username;
    
   getStarted(){
    const data ={
      "name" : this.name,
      "username" : this.user_name,
   };

   const formData = new FormData();
   formData.append('file', this.selected_file);

   var headers = new HttpHeaders();
   headers.append('Access-Control-Allow-Origin', '*');
   

   this.http.post('http://127.0.0.1/ratify/image_upload.php', formData, {headers:headers, withCredentials:true}).subscribe((response : any)=>{
     console.log(response);
   })

    
    this.http.post('http://127.0.0.1/ratify/update_name.php',JSON.stringify(data), {headers:headers,withCredentials: true}).subscribe((response: any)=>{
      console.log(response);
      this.route.navigate(['homepage/profile']);
    });

   }


   async selectImage(){
     const image = await Camera.getPhoto({
       quality :90,
       allowEditing: false,
       resultType: CameraResultType.Uri,
       source: CameraSource.Photos
     });
     console.log(image);

     if(image){
      this.saveImage(image);
     }
   }

   async saveImage(photo: Photo){
     const base64Data = await this.readAsBase64(photo);
     console.log(base64Data);

     const fileName = new Date().getTime() + '.jpeg';
     const savedFile = await Filesystem.writeFile({
       directory: Directory.Data,
       path: `${IMAGE_DIR}/${fileName}`,
       data: base64Data
     });
     console.log('saved:' , savedFile);
     
   }

   async readAsBase64(photo : Photo){
    if(this.platform.is('hybrid')){
      const file = await Filesystem.readFile({
        path:photo.path
      });
      return file.data;
    }
    else{
      const response = await fetch(photo.webPath);
      const blob = await response.blob();

      return await this.convertBlobToBase64(blob) as string;
    }
   }
   convertBlobToBase64 = (blob : Blob)=> new Promise((resolve,reject)=>{
     const reader = new FileReader;
      reader.onerror = reject;
      reader.onload = () =>{
        resolve(reader.result);
      };
      reader.readAsDataURL(blob);

   });
  ngOnInit() {
 
  }
 

}
