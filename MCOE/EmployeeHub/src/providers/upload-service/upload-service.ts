import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { UploadModel } from "../../models/upload/upload.interface";


/*
  Generated class for the UploadServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class UploadServiceProvider {
  private serviceEndpoint = 'http://internal-api-dev/photoswebapi';

  constructor(public http: Http) {
    console.log('Hello UploadServiceProvider Provider');
  }

  // public testService(): Promise<any>{
  //   let headers = new Headers();
  //   headers.append('Content-Type', 'application/json');
  //
  //   let options = new RequestOptions({ headers: headers });
  //
  //   let url: string = this.serviceEndpoint + "TestService";
  //   return this.http.get(url, options)
  //       .toPromise()
  //       .then(this.extractData)
  //       .catch(this.handleError);
  // }

  public uploadPhoto(upload: UploadModel): Promise<any> {
    try {
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');

      let options = new RequestOptions({ headers: headers });

      let url: string = this.serviceEndpoint + "/api/Photos";
      let body = JSON.stringify(upload);

      return this.http.post(url, body, options)
      .toPromise()
      .then(res => res.json().data)
      .catch(this.handleError);
    }
    catch (e) {
      return Promise.reject("Error caught in Upload Photo: " + e);
    }
  }

  public getTags(): Promise<any> {
    try {
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');

      let options = new RequestOptions({ headers: headers });

      let url: string = this.serviceEndpoint + "/api/Tags";

      return this.http.get(url, options)
        .toPromise()
        .then(this.extractData)
        .catch(this.handleError);
    }
    catch (e) {
      return Promise.reject("Error caught in Upload Photo: " + e);
    }
  }

  public getEvents(): Promise<any> {
    try {
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');

      let options = new RequestOptions({ headers: headers });

      let url: string = this.serviceEndpoint + "/api/Events";

      return this.http.get(url, options)
        .toPromise()
        .then(this.extractData)
        .catch(this.handleError);
    }
    catch (e) {
      return Promise.reject("Error caught in Upload Photo: " + e);
    }
  }

  private extractData(res: Response) {
      //Convert the response to JSON format
      let body = res.json();

      //Return the data (or nothing)
      return body || {};
  }

  private handleError(res: Response | any) {
      console.error('Entering handleError');
      console.dir(res);
      return Promise.reject(res.message || res);
  }
}
