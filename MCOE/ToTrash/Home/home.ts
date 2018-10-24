import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';
import { Slide } from '../../model/slide';
import { Story } from '../../model/story';
import { Video } from '../../model/video';
import { HeadlineService } from '../../providers/headline-service';
import { Detail } from '../../pages/detail/detail';



@Component({
    selector: 'home-home',
    templateUrl: 'home.html'
})
export class Home {
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
        this.navCtrl.push(Detail, { storyId: storyTapped.id });
    }

    slideTapped(slide: Slide) {
        this.navCtrl.push(Detail, { storyId: slide.id});
    }

}
