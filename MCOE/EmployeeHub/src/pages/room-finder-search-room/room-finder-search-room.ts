import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { ROOM_LIST } from "../../data/room/room";

/**
 * Generated class for the RoomFinderSearchRoomPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-room-finder-search-room',
  templateUrl: 'room-finder-search-room.html',
})
export class RoomFinderSearchRoomPage {

  roomList = ROOM_LIST;
  searchQuery: string = '';
  items: string[];

  constructor(public viewCtrl: ViewController, public navCtrl: NavController, public navParams: NavParams) {

    this.initializeItems();
  }

  initializeItems() {

    this.items = [];

    this.roomList.forEach(room => {
      this.items.push(room.name);
    })
  }

  getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  dismissModalCancel() {

    this.viewCtrl.dismiss();
  }

  dismissModalSuccess(item) {

    this.searchQuery = item;
    this.viewCtrl.dismiss(this.searchQuery);
  }

}
