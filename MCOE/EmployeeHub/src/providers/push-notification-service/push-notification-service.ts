import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Device } from 'ionic-native';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class PNService {
    private wapiEndpoint: string;  

    constructor(public http: Http) {
        console.log('Hello Push Notification Service Provider');
    }

    getHeaders(): Headers {
        let headers = new Headers();
        headers.append('Accept', 'application/json');
        // Website you wish to allow to connect
        headers.append('Access-Control-Allow-Origin', '*');

        // Request methods you wish to allow
        headers.append('Access-Control-Allow-Methods', 'GET, POST');
        return headers;
    }

    public registerDevice(deviceToken): Promise<any>{

        try {
            if (typeof deviceToken != 'undefined' && deviceToken != null && deviceToken.trim().length > 0) {
                this.wapiEndpoint = 'http://internal-api-dev.scana.com/PushService/api/';
                var networkId = "44675";
                var appName = "HeadlineApp";
                // alert("in register Device with tokenState: " + tokenState);

                var deviceRegistration = new DeviceRegistration(0
                    , deviceToken
                    , appName
                    , Device.model
                    , Device.platform
                    , networkId
                    , true
                    , Device.uuid);

                let headers = this.getHeaders();
                headers.append('content-type', 'application/json;odata = verbose');//fix for 415:unsupported Media type
                let options = new RequestOptions({ headers: headers });

                let url: string = this.wapiEndpoint + "DeviceRegistration";
                let body = JSON.stringify(deviceRegistration);

                alert("calling Push Service with NetworkId:'" + networkId + "'");

                return this.http.post(url, body, options)
                    .toPromise()
                    .then(res => res.json().data)
                    .catch(this.handleError);
            }
            
        }
        catch (e) {
            return Promise.reject("Error while registering device token: " + e);
        }
    }

    private handleError(res: Response | any) {
        console.error('Entering handleError');
        console.dir(res);
        return Promise.reject(res.message || res);
    }
}

export class DeviceRegistration {
    constructor(public Id: number
        , public DeviceToken: string
        , public AppName: string
        , public DeviceType: string
        , public OsType: string
        , public OwnerId: string
        , public Active: boolean
        , public DeviceId: string
    ) { }
}