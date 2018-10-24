import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private toastCtrl: ToastController) {

  }

  buttonClicked() {
    let myVar: string = "Helllloooo!";
    
    this.navCtrl.push('NewPage', {text: myVar});
  
  }

}
