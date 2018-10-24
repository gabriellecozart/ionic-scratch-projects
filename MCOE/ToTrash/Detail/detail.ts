import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular'; ''
import { Slide } from '../../model/slide';
import { Story, StoryDetail } from '../../model/story';
import { HeadlineService } from '../../providers/headline-service';

@Component({
  selector: 'detail-detail',
  templateUrl: 'detail.html'
})
export class Detail {
    storyDetail: StoryDetail;
    storyDetailId: any = 0;
    constructor(public navCtrl: NavController, public navParams: NavParams, public headlineService: HeadlineService) {
        if (this.navParams.get('storyId')) {
            this.storyDetailId = this.navParams.get('storyId');

            this.storyDetail = headlineService.getStoryDetails(this.storyDetailId);
        }
      } 
       // this.storyDetail = headlineService.getStoryDetails(1);
        //this.storyDetail = new StoryDetail(1, "SCE&G encourages customers to prepare for a safe 2017 hurricane season"
        //    , "June 1 marks the beginning of the 2017 Atlantic hurricane season, and SCE&G encourages customers to take time now to understand hurricane risks, get prepared, make a plan and stay informed. " +
        //    "The National Oceanic and Atmospheric Administration predicts an above normal hurricane season.Forecasters predict a 70 percent likelihood of 11 to 17 named storms, of which five to nine could become hurricanes, including two to four major hurricanes. " +
        //    "'We never know what hurricane season will bring, and we always hope for the best but prepare for the worst,' said Keller Kissam, president of retail operations for SCE& G. 'Last year, when Hurricane Matthew brought destruction across South Carolina, our employees worked tirelessly to restore power to a quarter of a million customers within 72 hours. I cannot overemphasize how much of this was only possible because we prepared in advance.'" +
        //    "Kissam said SCE& G prepares year- round for the potential impact of inclement weather by routinely inspecting poles and wires, using technology to enhance the durability of the lines and conditioning the system to withstand, or quickly recover from, inclement weather." +
        //    "'We also trim vegetation around thousands of miles of power lines each year to significantly decrease the number of outages during a storm,' Kissam said. 'Safety is the number one priority for SCE&G, and we are committed to maintaining the safety of our linemen who work diligently to restore power for our customers during a time of crisis.'"
        //    , "June 01, 2017"
        //    , true);

    
}
