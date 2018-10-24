import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the LocationServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class LocationServiceProvider {

  data: any;

  constructor(public http: Http) {
  }

  load(lat, long) {
    let locationUrl: string = 'https://maps.googleapis.com/maps/api/geocode/json?latlng=' + lat + ',' + long + '&key=AIzaSyCRfizQfTKFmEWXu_EVAcKQWwWcC2MJu38';
    this.http.get(locationUrl);
    // console.log(locationUrl);

    if (this.data) {
    // already loaded data
    return Promise.resolve(this.data);
  }

  return new Promise(resolve => {
    this.http.get(locationUrl)
      .map(res => res.json())
      .subscribe(data => {
        // we've got back the raw data, now generate the core schedule data
        // and save the data for later reference
        this.data = data;
        resolve(this.data);
      });
    });


  }



}
