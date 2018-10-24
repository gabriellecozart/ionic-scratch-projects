import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { ReleaseModel } from '../../models/release-model/release-model.interface';

/**
 * Generated class for the PublicReleasePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-public-release',
  templateUrl: 'public-release.html',
})
export class PublicReleasePage {
  fName: string = "";
  lName: string = "";
  email: string = "";
  phoneNumber: string = "";
  release = false;

  masks = {
    phoneNumber: ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]
  }

  private releases: ReleaseModel[];


  isEnabled: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController) {
    this.releases = [];
    this.releases.push({
      fname: null,
      lname: null,
      email: null,
      phone: null,
      release: false
    });
  }

  save(){

      let unmaskedData = {
          phoneNumber: this.phoneNumber.replace(/\D+/g, '')
      };
  }

  addRelease() {
    this.releases.push({
      fname: null,
      lname: null,
      email: null,
      phone: null,
      release: false
    });
  }

  releasesAgreed() {
    return this.releases.filter(r => !r.release).length > 0;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PublicReleasePage');
  }
  cancelButton() {
    this.navCtrl.setRoot('BasePage')
  }
  complete() {
    let data = {
      firstName: this.fName,
      lastName: this.lName,
      emailAddress: this.email,
      number: this.phoneNumber,
    }


    this.navCtrl.setRoot('BasePage', data);


    let toast = this.toastCtrl.create({
      message: 'Picture was uploaded successfully.',
      duration: 3000,
      position: 'bottom'
    });
    toast.present();

  }

  isFormFilled(): boolean {


    if(this.fName.length > 0 && this.lName.length > 0 &&
      this.email.length > 0 && this.phoneNumber.length > 0) {
      this.isEnabled = true;
    }

      return this.isEnabled;
  }
}
