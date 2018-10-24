import { Injectable } from '@angular/core';


import { Http } from '@angular/http';

import { User } from '../../models/user.interface';
import { Observable } from 'rxjs/Observable';
import { Repository } from '../../models/repository.interface';

/*
  Generated class for the GithubServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GithubServiceProvider {

  baseUrl: string = "https://api.github.com/users";
  repoUrl: string = "repos";

  constructor(public http: Http) {
    console.log('Hello GithubServiceProvider Provider');
  }

  getUserInformation(username: string):Promise<User> {
    return new Promise(resolve => {
      this.http.get(`${this.baseUrl}/${username}`).subscribe(data => {
        resolve(data.json());
      }, err => {
        console.log(err);
      });
    });
  }

  getUserRepositories(username: string): Promise<Repository[]> {
    return new Promise(resolve => {
      this.http.get(`${this.baseUrl}/${username}/${this.repoUrl}`).subscribe(data => {
        resolve(data.json());
      }, err => {
        console.log(err);
      })
    })
  }

}
