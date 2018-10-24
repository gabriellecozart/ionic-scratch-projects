import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';

/*
  Generated class for the AppBrowser page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-app-browser',
  templateUrl: 'app-browser.html'
})
export class AppBrowserPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private iab:InAppBrowser) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad AppBrowserPage');
  }

  ngOnInit() {
      //const browser = this.iab.create('http://theedge.scana.com/Lists/Edge%20News/DispForm.aspx?ID=1111&Source=http%3A%2F%2Ftheedge%2Escana%2Ecom&ContentTypeId=0x01006D393DE169951F45BAF23A1BDABBCBA6002FE68A061116EF4D89CF67510C0CB8EC', '_self', { location: 'no' });
      const browser = this.iab.create('http://theedge.scana.com/Pages/Home.aspx', '_self', { location:'yes' , hardwareback:'yes', presentationstyle:'pagesheet'});
  }

}
