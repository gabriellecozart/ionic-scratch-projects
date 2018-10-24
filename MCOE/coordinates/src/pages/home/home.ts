import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  lat: number;
  long: number;
  alt: number;

  constructor(public geolocation: Geolocation, public navCtrl: NavController) {
    this.getStartPosition();


  }

  getStartPosition() {
    this.geolocation.getCurrentPosition().then((position) => {
      this.lat = position.coords.latitude,
      this.long = position.coords.longitude,
      this.alt = position.coords.altitude
    }).then((watch) => {
      this.watch();
    });

//     catch((error) => {
//   console.log('Error getting location', error);
// });
  }


  watch() {
    let watch = this.geolocation.watchPosition();
    watch.subscribe((data) => {
      //  data can be a set of coordinates, or an error (if an error occurred).
       this.lat = data.coords.latitude,
       this.long = data.coords.longitude,
       this.alt = data.coords.altitude
       //this.alt = data.coords.altitude
       console.log('Lat: ', this.lat);
       console.log('Long: ', this.long);
       //console.log('Alt: ', this.alt);
       console.log('Hey');
    });
  }

}
