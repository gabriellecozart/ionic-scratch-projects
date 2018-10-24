import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Slide } from "../../models/slide/slide";
import { Story } from "../../models/story/story";
import { Video } from "../../models/video/video";
import { HeadlineService } from "../../providers/headline-service/headline-service";

/**
 * Generated class for the HomeMockPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-home-mock',
  templateUrl: 'home-mock.html',
})
export class HomeMockPage {

    slides: Slide[] = [];
    stories: Story[] = [];
    videos: Video[] = [];
    showAlert: boolean = false;
    alertMsg: string;
    constructor(public navCtrl: NavController
        , headlineService: HeadlineService
    ) {
        this.slides = headlineService.getSlides();
        this.stories = headlineService.getStories();
        this.videos = headlineService.getVideos();
        this.alertMsg = sessionStorage.getItem('alert');
        if (this.alertMsg) { this.showAlert = true; }
        else { this.showAlert = false;}
    }

    storyTapped(storyTapped: Story)
    {
        this.navCtrl.push('DetailPage', { storyId: storyTapped.id });
    }

    slideTapped(slide: Slide) {
        this.navCtrl.push('DetailPage', { storyId: slide.id});
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
        this.navCtrl.setRoot('DirectoryLookupPage');
    }


}
