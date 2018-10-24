import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the UploadFormPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-upload-form',
  templateUrl: 'upload-form.html',
})
export class UploadFormPage {

  tags = [];
  selectedTags = [];

  picDate = "January 3, 2016";
  picLocation = "Cayce, SC";
  picResolution = "1080 x 720";

  eventName = "";
  description = "";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.initTags();
  }

  initTags() {
    this.tags = [
      { name: "Storm", selected: false},
      { name: "Power", selected: false},
      { name: "Flood", selected: false},
      { name: "Ice", selected: false},
    ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UploadFormPage');
  }

  // getTags(ev: any) {
  //   // reset searched tags
  //   //this.initTags();
  //   let val = ev.target.value;
  //
  //   // if val empty don't display items
  //   if (!val || val.trim() == '') {
  //     this.showTags = false;
  //   }
  //   else {
  //     this.showTags = true;
  //     this.searchedTags = this.tags.filter((tag) => {
  //       return (tag.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
  //     });
  //   }
  // }

  updateSelectedTags() {
    this.selectedTags = this.tags.filter(t => t.selected);
  }
}
