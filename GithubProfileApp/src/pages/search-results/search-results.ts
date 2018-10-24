import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, Loading } from 'ionic-angular';
import { GithubServiceProvider } from '../../providers/github-service/github-service';
import { User } from '../../models/user.interface';
import { Repository } from '../../models/repository.interface';

/**
 * Generated class for the SearchResultsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-search-results',
  templateUrl: 'search-results.html',
})
export class SearchResultsPage {
  user: User;
  username: string;
  repositories: Repository[];

  

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    private githubService: GithubServiceProvider, private loading: LoadingController) {
  }

  getUserInformation(): void {
    let loader = this.showLoading();
    this.githubService.getUserInformation(this.username).then((data:User) => {
      this.user = data;
      console.log("User: ", data);
    })

    this.githubService.getUserRepositories(this.username).then((data:Repository[]) => {
      this.repositories = data;
      console.log("Repos: ", this.repositories)
    })

    this.dismissLoading(loader);
  }

  showLoading(): Loading {
    let loader = this.loading.create({
      content: "Please wait...",
      duration: 3000
    });
    loader.present();
    return loader;
  }

  dismissLoading(loader: Loading){
    loader.dismiss();
  }

  ionViewWillLoad() {
    this.username = this.navParams.get('username');
    this.getUserInformation();
  }

}
