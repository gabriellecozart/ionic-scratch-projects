import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Loading, AlertController, LoadingController } from 'ionic-angular';
import { HeadlineService } from "../../providers/headline-service/headline-service";
import { Video } from "../../models/video/video";
import { Story } from "../../models/story/story";
import { Slide } from "../../models/slide/slide";

/**
 * Generated class for the ConnectedPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  slides: Slide[] = [];
    stories: Story[] = [];
    videos: Video[] = [];
    showBreakingNews: boolean = false;
    loader: Loading;
    alertMsg: string;
    constructor(public navCtrl: NavController, public navParams: NavParams,
            public alertCtrl: AlertController,
            public loadingCtrl: LoadingController,
            public edgeService: HeadlineService) { 

        this.alertMsg = sessionStorage.getItem('alert');
        if (this.alertMsg) { this.showBreakingNews = true; }
        else { this.showBreakingNews = false; }

        this.getSlides();
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConnectedPage');
  }

  getSlides() {
      this.loader = this.loadingCtrl.create({
          content: "Connecting to the edge..."
      });

      this.edgeService.getSlidesFromEdge().then(
          data => {
              if (data) {

                  //We have data, so lets do something with it
                  for (var i = 0; i < data.length; i++) {
                      this.slides.push(new Slide(i, data[i].position, data[i].headline, ""
                          , data[i].linkToDetail, data[i].pictureUrl));

                  }
              }
              this.getStories();
          },
          error => {
              
              this.loader.dismiss();
            
              console.error('Error retrieving Slides');
              console.dir(error);
              this.showAlert(error);
          }
      );
  }

  getStories() {
      this.edgeService.getTopNewsFromEdge().then(
          data => {
              if (data) {

                  //We have data, so lets do something with it
                  for (var i = 0; i < data.length; i++) {
                      this.stories.push(new Story(data[i].id, data[i].title, data[i].summary
                          , data[i].dateCreated, data[i].isTopStory,data[i].linkToDetail ));

                  }
              } 
              this.getVideos();
          },
          error => {

              this.loader.dismiss();

              console.error('Error retrieving Top News');
              console.dir(error);
              this.showAlert(error);
          }
      );}

  getVideos() {
      this.edgeService.getTopVideosFromEdge().then(
          data => {
              this.loader.dismiss();
              if (data) {

                  //We have data, so lets do something with it
                  for (var i = 0; i < data.length; i++) {
                      this.videos.push(new Video(data[i].id, data[i].title, "", data[i].dateCreated
                          , data[i].picture, data[i].linkToVideo, data[i].duration));

                  }
              } 
          },
          error => {

              this.loader.dismiss();

              console.error('Error retrieving Videos');
              console.dir(error);
              this.showAlert(error);
          }
      );}
    
  showAlert(message: string) {
      let alert = this.alertCtrl.create({
          title: 'Error',
          subTitle: 'Source: Edge Service',
          message: message,
          buttons: [{ text: 'Sorry' }]
      });
      alert.present();
  }

  slideTapped(slide: Slide) {
     window.open(slide.linkToDetail);
      //this.navCtrl.push(ConnectedDetailPage, { linkToDetail: slide.linkToDetail });
  }

  storyTapped(story: Story) {
      //window.open(story.linkToDetail);
      this.navCtrl.push('ConnectedDetailPage', { linkToDetail: story.linkToDetail });
  }

  navigateToRoomFinderApp() {
        this.navCtrl.setRoot('RoomFinderMenuPage');
    }

    navigateToPhotoUploadApp() {
        this.navCtrl.setRoot('PhotoUploadBasePage');
    }

    navigateToMapsAndDirectionsApp() {
        this.navCtrl.setRoot('MapsAndDirectionsPage');
    }
    
    navigateToDirectoryLookupApp() {
        this.navCtrl.setRoot('PhotoUploadBasePage');
    }

}
