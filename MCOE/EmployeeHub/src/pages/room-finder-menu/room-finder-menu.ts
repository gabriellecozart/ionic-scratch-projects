import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ModalController } from 'ionic-angular';
import { ROOM_LIST } from "../../data/room/room";
import { Geolocation } from '@ionic-native/geolocation';
import { GeolocationModel } from "../../models/geolocation/geolocation.interface";

declare var google;

/**
 * Generated class for the RoomFinderMenuPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-room-finder-menu',
  templateUrl: 'room-finder-menu.html',
})
export class RoomFinderMenuPage {

  @ViewChild('map') mapElement: ElementRef;
  map: any;

  location = {} as GeolocationModel;

  roomList = ROOM_LIST;
  selectedRoom: string;
  lookingForRoom: boolean = false;
  pathedRoom: any;

  oscPostion: any;
  dataCenterPosition: any;
  chqPosition: any;
  marker = new google.maps.Marker();

  symbol = {
    path: 'M -5,0 0,-5 5,0 0,5 z',
    strokeColor: '#3050ba',
    fillColor: '#3050ba',
    fillOpacity: 1
  }

  constructor(public geolocation: Geolocation, private navCtrl: NavController, private modalCtrl: ModalController, private navParams: NavParams, private alertCtrl: AlertController) {
    this.getPosition();

    this.chqPosition = new google.maps.LatLng(33.935614, -81.049054);
    this.dataCenterPosition = new google.maps.LatLng(33.954668, -81.048747);
    this.oscPostion = new google.maps.LatLng(33.955464, -81.049176);
  }

  getPosition() {
    let posOptions = {timeout: 10000, enableHighAccuracy: true};

    this.geolocation.getCurrentPosition(posOptions).then((position) => {
      this.location.latitude = position.coords.latitude,
      this.location.longitude = position.coords.longitude,
      this.location.accuracy = position.coords.accuracy
      this.location.altitude = position.coords.altitude,
      this.location.altitudeAccuracy = position.coords.altitudeAccuracy,
      this.location.heading = position.coords.heading

      this.getMap();

    }).then(() => {
      this.watch();

    }).catch((error) => {
      console.log('Error getting location', error);

    });
  }

  watch() {
    let watchOptions = {timeout : 3000, enableHighAccuracy: true}; // may cause errors if true

    let watch = this.geolocation.watchPosition(watchOptions);
    watch.subscribe((data) => {
      //  data can be a set of coordinates, or an error (if an error occurred).
       this.location.latitude = data.coords.latitude,
       this.location.longitude = data.coords.longitude,
       this.location.altitude = data.coords.altitude
    });
  }


  getMap() {
    var mapOptions = {
        center: this.chqPosition,
        zoom: 17,
        mapTypeControlOptions: {
            mapTypeIds: ['roadmap']
        },
        streetViewControl: false,
        mapTypeControl: false,
        fullscreenControl: false,
        styles: [
          {
            "featureType": "administrative",
            "elementType": "geometry",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "featureType": "poi",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "featureType": "road",
            "elementType": "labels.icon",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "featureType": "transit",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          }
        ]
    };

    this.map = new google.maps.Map
    (document.getElementById("map"), mapOptions);
  }



  searchRoom(roomNumber: string) {

    this.roomList.forEach(room => {
      if(room.name === roomNumber) {
        this.pathedRoom = new google.maps.Polygon({
        paths: room.polygon,
        strokeWeight: 0.5,
        fillColor: 'grey',
        });
        this.pathedRoom.setMap(this.map);
        if(room.campus === 'CHQ') {
          this.map.setCenter(this.chqPosition); 
          this.map.setZoom(17);       
        } else if(room.campus === 'OSC') {
          this.map.setCenter(this.oscPostion); 
          this.map.setZoom(18);       
        } else {
          this.map.setCenter(this.dataCenterPosition);   
          this.map.setZoom(18);       
        }
      }
    })
  }

  presentLocation() {

    this.marker.setMap(null);

    let latlong = new google.maps.LatLng(this.location.latitude, this.location.longitude);

    this.marker = new google.maps.Marker({
      position: latlong,
      icon: this.symbol
    });

    this.marker.setMap(this.map);
    this.map.setCenter(this.marker.position); 
  }

  navigateToSearchRoomModal() {

   let modal = this.modalCtrl.create('RoomFinderSearchRoomPage');

   modal.onDidDismiss(data => {
     if(data != null) {

       if(this.lookingForRoom) { this.removePolygon(); }

       this.selectedRoom = data;
       this.searchRoom(this.selectedRoom);
       this.lookingForRoom = true;
     }
   });
   modal.present();
  }

  navigateToHomePage() {
    this.navCtrl.setRoot('HomeMockPage');
  }

  cancelSearch() {

    this.lookingForRoom = false;
    this.removePolygon();
  }

  removePolygon() {

    this.pathedRoom.setMap(null);
  }

}
