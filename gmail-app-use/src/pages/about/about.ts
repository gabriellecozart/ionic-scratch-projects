import { Component } from '@angular/core';
import { NavController, ToastController, Platform } from 'ionic-angular';
// import { EmailComposer } from '@ionic-native/email-composer';
import { AppAvailability } from '@ionic-native/app-availability';
import { EmailComposer } from '@ionic-native/email-composer';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  appToCheck: string = ''

  constructor(public navCtrl: NavController, private toastCtrl: ToastController, private platform: Platform, private appAvail: AppAvailability, private emailComposer: EmailComposer) {

  }

  checkAvail() {
    let app;
    
    if (this.platform.is('ios')) {
      app = this.appToCheck;
    } else if (this.platform.is('android')) {
      app = 'com.twitter.android';
    }
    
    this.appAvail.check(app)
      .then(
        (yes) => {
          let toast = this.toastCtrl.create({
            message: `${this.appToCheck} is Available`,
            duration: 3000,
            position: 'bottom'
          }); toast.present();
        },
        (no) => {
          let toast = this.toastCtrl.create({
            message: `${this.appToCheck} not Available`,
            duration: 3000,
            position: 'bottom'
          }); toast.present();
        }
      );
  }

  openApp() {
    window.open(this.appToCheck, '_systme', 'location=no');
  }

  ionViewDidLoad() {
    // this.checkAvail('googlegmail:///');
  }

  sendEmail() {
    if(this.platform.is('ios')) {
      let email = {
        app: 'googlegmail:///',
        to: 'gcozart@citadel.edu',
        subject: 'Hello',
        body: 'How are you?'
      };

      this.emailComposer.isAvailable('googlegmail:///').then((available: boolean) => {
        if(available) {
          this.emailComposer.open(email)

          let toast = this.toastCtrl.create({
            message: 'Email Sent',
            duration: 3000,
            position: 'bottom'
          }); toast.present();
        } else {
          let toast = this.toastCtrl.create({
            message: 'App not Available',
            duration: 3000,
            position: 'top'
          }); toast.present();
        }
      });
    }
  }

}
