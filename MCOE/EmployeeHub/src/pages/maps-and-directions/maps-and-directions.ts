import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { HeadlineService } from "../../providers/headline-service/headline-service";
import { Location } from "../../models/location/location"


/**
 * Generated class for the MapsAndDirectionsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-maps-and-directions',
  templateUrl: 'maps-and-directions.html',
})
export class MapsAndDirectionsPage {

  allLocations: Location[] = [];
    locations: Location[] = [];
    searchTerm: string = '';

  constructor(public navCtrl: NavController
      , public navParams: NavParams
      , public locService: HeadlineService
      , public loadingCtrl: LoadingController
      , public alertCtrl: AlertController) {}

  ionViewDidLoad(){
    this.getLocations();
    this.setFilteredItems();
  }

  getLocations() {
      let loader = this.loadingCtrl.create({
          content: "Connecting to the edge..."
      });

      this.locService.getLocations().then(
          data => {
            loader.dismiss();
            if (data) {
                    //We have data, so lets do something with it
                this.locations = data;
                this.allLocations = data;
                   
                //for (var i = 0; i < data.length; i++) {
                //    this.slides.push(new Slide(i, data[i].position, data[i].headline, ""
                //        , data[i].linkToDetail, data[i].pictureUrl));
                //}
              }
          },
          error => {
              loader.dismiss();
            
              console.error('Error retrieving Locations');
              console.dir(error);
              this.showAlert(error);
          }
      );
  }

  openMap(loc: Location){
    window.open(loc.url);
  }

  setFilteredItems() {
      this.locations = this.allLocations.filter((item) => {
        return item.facilityName.toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1 ||
        item.address.toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1 ||
        item.city.toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1 ||
        item.state.toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1 ||
        item.zipCode.toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1
    });  
  }


 showAlert(message: string) {
      let alert = this.alertCtrl.create({
          title: 'Error',
          subTitle: 'Source: Edge Service',
          message: message,
          buttons: [{ text: 'Sorry' }]
      });
      alert.present();
  }

  navigateToHomePage() {
      this.navCtrl.setRoot('HomeMockPage');
  }

}
