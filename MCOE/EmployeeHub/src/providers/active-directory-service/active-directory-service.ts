import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

/*
  Generated class for the ActiveDirectoryService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class ADService {
    private wapiEndpoint = 'http://internal-api-dev.scana.com/ADService/api/';

    constructor(public http: Http) {
        console.log('Hello ActiveDirectoryService Provider');
    }

    search(ANR: string, Department: string, Phone: string): Promise<any> {
        var url: string;

        if (ANR.trim().length > 0)
        {
            url = this.wapiEndpoint + "Employee/employeesByANR?anr=" + ANR.trim();
        }
        else if (Department.trim().length > 0)
        {
            url = this.wapiEndpoint + "Employee/employeesByDepartment?Department=" + Department.trim();
        }
        else if (Phone.trim().length > 0)
        {
            url = this.wapiEndpoint + "Employee/employeesByPhone?phone=" + Phone.trim();
        }

        let headers = new Headers();
        headers.append('Accept', 'application/json');
        headers.append('Access-Control-Allow-Origin', '*');
        headers.append('Access-Control-Allow-Methods', 'GET');

        let options = new RequestOptions({ headers: headers });
       // alert(url);
        return this.http.get(url, options)
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
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

    warmupCalltoADService(): Promise<any> {
        //make a wakeupcall to start the vpn tunnel 
        
        let url: string = this.wapiEndpoint + "Test/Get";
        let headers = new Headers();
        headers.append('Accept', 'application/json');
        headers.append('Access-Control-Allow-Origin', '*');
        headers.append('Access-Control-Allow-Methods', 'GET');

        let options = new RequestOptions({ headers: headers });
       // alert(url);
        return this.http.get(url, options)
            .toPromise()
            .then()
            .catch(this.handleError);
    }

}