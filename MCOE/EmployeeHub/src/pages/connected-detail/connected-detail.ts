import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';

/*
  Generated class for the ConnectedDetail page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-connected-detail',
  templateUrl: 'connected-detail.html'
})
export class ConnectedDetailPage {
    linkToDetail: string;
    constructor(public navCtrl: NavController, public navParams: NavParams, private iab: InAppBrowser) {
        if (this.navParams.get('linkToDetail')) {
            this.linkToDetail = this.navParams.get('linkToDetail');
         }
    }

  ionViewDidLoad() {
      console.log('ionViewDidLoad ConnectedDetailPage');
      
      var browser = this.iab.create(this.linkToDetail, '_self',
          { presentationstyle: 'pagesheet',  toolbar: 'yes', allowInlineMediaPlayback: 'yes' });
     // browser.show();
      // close InAppBrowser after 5 seconds
      setTimeout(function () {
          browser.close();
      }, 5000);

      
  }

}
