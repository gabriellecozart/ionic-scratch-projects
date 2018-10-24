import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Slide } from "../../models/slide/slide";
import { Story, StoryDetail } from "../../models/story/story";
import { Video } from "../../models/video/video";
/*
  Generated class for the HeadlineService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class HeadlineService {
    slides: Slide[] = [];
    stories: Story[] = [];
    videos: Video[] = [];
    storyDetails: StoryDetail[] = [];
   // wapiEndpoint: string = 'http://internal-api-dev.scana.com/EdgeService/api/';
    wapiEndpoint: string = 'http://internal-api-dev.scana.com/EdgeService/api/';


    constructor(public http: Http) {
        console.log('Hello HeadlineService Provider');
        this.populateSlides();
        this.populateStories();
        this.populateStoryDetails();
    }

    populateSlides(){
        this.slides.push(new Slide(6, 1,"Summer Food Drive", "../../assets/Images/foodDrive.jpg", "", ""));
        this.slides.push(new Slide(7, 2, "Know a good fit?", "../../assets/Images/EmpReferral.jpg", "", ""));
        this.slides.push(new Slide(8, 3, "Eye on SCANA", "../../assets/Images/EyeOnScana.jpg", "", ""));
        this.slides.push(new Slide(9, 4, "Customer Assistance Team", "../../assets/Images/HouseCalls.jpg", "", ""));
    }

    getSlides(): Slide[] {
        return this.slides;
    }

    populateStories() {
        this.stories.push(new Story(1, "SCE&G encourages customers to prepare for a safe 2017 hurricane season"
            , "June 1 marks the beginning of the 2017 Atlantic hurricane season, and it's predicted to be above normal. SCE&G encourages customers to take time now to understand hurricane risks, get prepared, make a plan and stay informed. "
            , "June 01, 2017"
            , true, ""));
        this.stories.push(new Story(2, "Message from Randy Senn: Two weeks until the Total Rewards survey"
            , "Every opinion counts as we create our long-term total rewards strategy. Please make time to be heard."
            , "June 01, 2017"
            , true, ""));
        this.stories.push(new Story(3, "Mid-Year reviews due by July 14"
            , "It's time for all employees to begin the mid-year performance review process. <strong>Reviews are due no later than July 14</strong>, but check with your supervisor to see if an earlier date has been established for your business area.  "
            , "May 25, 2017"
            , true, ""));
        this.stories.push(new Story(4, "V.C. Summer completes refueling outage", ""
            , "June 05, 2017"
            , false, ""));
        this.stories.push(new Story(5, "Time to man up for preventive health", ""
            , "June 01, 2017"
            , false, ""));
      
    }

    getStories(): Story[] {
        return this.stories;
    }

    populateStoryDetails() {

        this.storyDetails.push(new StoryDetail(1, "SCE&G encourages customers to prepare for a safe 2017 hurricane season"
            , "June 1 marks the beginning of the 2017 Atlantic hurricane season, and SCE&G encourages customers to take time now to understand hurricane risks, get prepared, make a plan and stay informed. "+
            "The National Oceanic and Atmospheric Administration predicts an above normal hurricane season.Forecasters predict a 70 percent likelihood of 11 to 17 named storms, of which five to nine could become hurricanes, including two to four major hurricanes. "+
            "'We never know what hurricane season will bring, and we always hope for the best but prepare for the worst,' said Keller Kissam, president of retail operations for SCE& G. 'Last year, when Hurricane Matthew brought destruction across South Carolina, our employees worked tirelessly to restore power to a quarter of a million customers within 72 hours. I cannot overemphasize how much of this was only possible because we prepared in advance.'"+
            "Kissam said SCE& G prepares year- round for the potential impact of inclement weather by routinely inspecting poles and wires, using technology to enhance the durability of the lines and conditioning the system to withstand, or quickly recover from, inclement weather."+
            "'We also trim vegetation around thousands of miles of power lines each year to significantly decrease the number of outages during a storm,' Kissam said. 'Safety is the number one priority for SCE&G, and we are committed to maintaining the safety of our linemen who work diligently to restore power for our customers during a time of crisis.'"
            , "June 01, 2017"
            ));
        this.storyDetails.push(new StoryDetail(2, "Message from Randy Senn: Two weeks until the Total Rewards survey"
            , "When we distributed MySCANA Total Rewards statements on May 3, we \r\n" +  
            "announced that we would be conducting a survey to get all employees'\r\n" +
            "perspectives on the total rewards you value most.This includes \r\n" + 
            "compensation, benefits, career development and non- financial rewards.\r\n" + 
            
            "\nOur goal is to understand which rewards matter to you � even \r\n" + 
             "if SCANA doesn't offer them today � so that we can invest SCANA's \r\n" + 
             "finite resources where it would be most appreciated.This is \r\n" + 
             "not a cost- cutting effort, nor does it guarantee specific changes. \r\n" +
             "The results of the survey will support the creation of our long- term \r\n" +
            "strategy to attract and retain employees.\r\n" + 

             "\nWe want to hear from every employee, so please plan to participate. \r\n" +
             "Go ahead and schedule time on your calendar to complete the survey \r\n" +
             "between June 12 and 30. Every opinion deserves to be considered in \r\n" +
             "the development of our long- term rewards strategy. \r\n" +



        "\r\nHere are a few things to keep in mind:\r\n" +
        "\r\n�To prepare for the survey, give some thought to which rewards are " +
        "\r\nmost meaningful to you, even if it's something SCANA doesn't offer today. " + 
        "\r\nYou can also review your 2016 Total Rewards statements in PeopleSoft, and " +
        "\r\nlook at The Edge for details about SCANA's current rewards for Health, Wealth & Career. " +

        "\r\n�Completion of the survey should take about 25 minutes, " +
        "\r\non average, and will require thoughtful consideration. " +
        "\r\n�This is not a typical survey.You will be asked to evaluate and " +
        "\r\ncompare rewards to indicate which you value most.Survey " +
        "\r\nquestions will be unique to each employee based on " +
        "\r\nresponses to previous questions. " +

        "\r\n�This is part of strategic planning for recruitment " + 
        "\r\nand retention.Using a similar budget as today, we want " + 
        "\r\nto ensure we have alignment between what we spend and what is valued." +
        "\r\n�A third party is administering the survey, and " +
        "\r\nSCANA will not see individual responses � only aggregate results. " +
        "\r\n�Every opinion counts as we create our long- term " +
        "\r\ntotal rewards strategy.Please make time to be heard." +

        "\r\n\r\nIf you have any questions about the upcoming survey," +
        "\r\nplease call your HR business partner. "  
            , "June 01, 2017"
            ));
        this.storyDetails.push(new StoryDetail(3, "Mid-Year reviews due by July 14"
            , "It's time for all employees to begin the mid-year performance review process. <strong>Reviews are due no later than July 14</strong>, but check with your supervisor to see if an earlier date has been established for your business area.  "
            , "May 25, 2017"
            ));
        this.storyDetails.push(new StoryDetail(4, "V.C. Summer completes refueling outage", ""
            , "June 05, 2017"
            ));
        this.storyDetails.push(new StoryDetail(5, "Time to man up for preventive health", ""
            , "June 01, 2017"
            ));
        this.storyDetails.push(new StoryDetail(6, "Help us feed the hunger monster this summer"
            , "More than 22 million children currently receive free or reduced-price meals through the National School Lunch and Breakfast Programs, yet the majority of those children, 4 out of every 5, will lose access to those meals as public schools close for the summer months. SCE&G is having its annual food drive, May 30 through June 16, to help fill the gap for those children. " +
            "The summer has become the time of year when food donations are needed most.A growing number of children are dependent on the school cafeteria as their primary resource for nourishment � sometimes only receiving one meal a day during lunch, and possibly breakfast, if the school offers an early meal program.When school is not in session some of these children won't have anything to eat at all."
            , "May 30, 2017"));
        this.storyDetails.push(new StoryDetail(7, "Know a good fit?HR launches Employee Referral Program"
            , "Do you know a good fit for SCANA? If so, Human Resources wants to hear from you through the new Employee Referral Program. " +
            "Experience has shown that new employees who join the company through employee referrals are typically excellent contributors.The referral program is simple:"
            , "May 22, 2017 "));
        this.storyDetails.push(new StoryDetail(8, "Eye on SCANA", "", ""));
        this.storyDetails.push(new StoryDetail(9, "Customer Assistance Team", "", ""));
    }

    getStoryDetails(storyId: number): StoryDetail{
               
        return this.storyDetails.find(
            StoryDetail => StoryDetail.id === storyId); 

        //return new StoryDetail(1, "SCE&G encourages customers to prepare for a safe 2017 hurricane season"
        //    , "June 1 marks the beginning of the 2017 Atlantic hurricane season, and SCE&G encourages customers to take time now to understand hurricane risks, get prepared, make a plan and stay informed. " +
        //    "The National Oceanic and Atmospheric Administration predicts an above normal hurricane season.Forecasters predict a 70 percent likelihood of 11 to 17 named storms, of which five to nine could become hurricanes, including two to four major hurricanes. " +
        //    "'We never know what hurricane season will bring, and we always hope for the best but prepare for the worst,' said Keller Kissam, president of retail operations for SCE& G. 'Last year, when Hurricane Matthew brought destruction across South Carolina, our employees worked tirelessly to restore power to a quarter of a million customers within 72 hours. I cannot overemphasize how much of this was only possible because we prepared in advance.'" +
        //    "Kissam said SCE& G prepares year- round for the potential impact of inclement weather by routinely inspecting poles and wires, using technology to enhance the durability of the lines and conditioning the system to withstand, or quickly recover from, inclement weather." +
        //    "'We also trim vegetation around thousands of miles of power lines each year to significantly decrease the number of outages during a storm,' Kissam said. 'Safety is the number one priority for SCE&G, and we are committed to maintaining the safety of our linemen who work diligently to restore power for our customers during a time of crisis.'"
        //    , "June 01, 2017"
        //    , true);
    }

    getVideos(): Video[] {
        this.videos.push(new Video(1, "SCANA Benefits ERC", "../../assets/videos/SCANA_Benefits_ERC.mp4", "6/6/2017", "", "", ""));
        return this.videos;
    }

    getHeaders(): Headers {
        let headers = new Headers();
        headers.append('Accept', 'application/json');
        // Website you wish to allow to connect
        headers.append('Access-Control-Allow-Origin', '*');

        // Request methods you wish to allow
        headers.append('Access-Control-Allow-Methods', 'GET');

        return headers;
    }

    getSlidesFromEdge(): Promise<any> {
        let url: string = this.wapiEndpoint + "Slider";
        let headers = this.getHeaders();

        //let options = new RequestOptions({ headers: headers, withCredentials: true });
        let options = new RequestOptions({ headers: headers });
        return this.http.get(url, options)
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);

    }

    getTopNewsFromEdge(): Promise<any> {
        let url: string = this.wapiEndpoint + "TopNews";
        let headers = this.getHeaders();

        //let options = new RequestOptions({ headers: headers, withCredentials: true });
        let options = new RequestOptions({ headers: headers });
        return this.http.get(url, options)
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);

    }

    getTopVideosFromEdge(): Promise<any> {
        let url: string = this.wapiEndpoint + "TopVideos";
        let headers = this.getHeaders();

        //let options = new RequestOptions({ headers: headers, withCredentials: true });
        let options = new RequestOptions({ headers: headers });
        return this.http.get(url, options)
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    }

    getLocations(): Promise<any> {
        let headers = this.getHeaders();
        let options = new RequestOptions({ headers: headers });

        let url: string = this.wapiEndpoint + "Locations";

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
}
