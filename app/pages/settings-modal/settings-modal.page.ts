import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-settings-modal',
  templateUrl: './settings-modal.page.html',
  styleUrls: ['./settings-modal.page.scss'],
})
export class SettingsModalPage implements OnInit {

  constructor(private modalCtrl : ModalController) { }

  ngOnInit() {
  }
  close(){
    this.modalCtrl.dismiss();
  }

  showUserInput(){
    var user_input = document.getElementById('username_input');
    user_input.classList.toggle('hide');
  }
  showNameInput(){
    var name_input = document.getElementById('name_input');
    name_input.classList.toggle('hide');
  }

}
