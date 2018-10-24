import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, AlertController, FabContainer } from 'ionic-angular';
import { LocationServiceProvider } from "../../providers/location-service/location-service";
import { UploadServiceProvider } from "../../providers/upload-service/upload-service";
import { ImagePicker, ImagePickerOptions } from "@ionic-native/image-picker";
import { Camera, CameraOptions } from "@ionic-native/camera";
import { Geolocation } from "@ionic-native/geolocation";
import { Tag } from "../../models/tag/tag.interface";
import { EventModel } from "../../models/event/event.interface";
import { UploadModel } from "../../models/upload/upload.interface";


/**
 * Generated class for the PhotoUploadBasePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-photo-upload-base',
  templateUrl: 'photo-upload-base.html',
})
export class PhotoUploadBasePage {

  public base64Image: string;

  //public fakeBase64Image: string;
  //imageData: any;
  //tags: any;
  isPictureShown: boolean = false;

  placeHolderImage: string = "data:image/png;base64,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sAUWFhZqMBh89rOtzc0aj8e1uLAw5anmz3g8ru3t7To6Ojrx31yzHxolWC1w48aN+vjx44mfv9/amuI0nKTb7dbi4mLTY8w1p4QtsLK6Wleu2BVtt3Z7zQOnDfNX0gLdbrfu3LnT9Bicotvt1vq6fdQ0wWqJ79bX68bNm02PwQkePXpUvZ4rKE0TrJbodDr15MmTuilardLpdOrR48e1vLLS9ChUVWdje3fc9BD833g8rvdbW7WxsXHq3Sou3/UbN+r+/fvV7/ebHoU/CVZLHR8f1+7ubu3//nsNh8M6HttN09Drdmux36/l5WUvlreQYAExXMMCYggWEEOwgBiCBcQQLCCGYAExBAuIIVhADMECYggWEEOwgBiCBcQQLCCGYAExBAuIIVhADMECYggWEEOwgBiCBcQQLCCGYAExBAuIIVhADMECYggWEEOwgBiCBcQQLCCGYAExBAuIIVhADMECYggWEEOwgBiCBcQQLCCGYAExBAuIIVhADMECYggWEEOwgBiCBcQQLCCGYAExBAuIIVhADMECYggWEEOwgBiCBcQQLCCGYAExBAuIIVhADMECYggWEEOwgBiCBcQQLCCGYAExBAuIIVhADMECYggWEEOwgBiCBcQQLCCGYAExBAuIIVhADMECYggWEEOwgBiCBcQQLCCGYAExBAuIIVhADMECYggWEEOwgBiCBcQQLCCGYAExBAuIIVhADMECYggWEEOwgBiCBcQQLCCGYAExBAuIIVhADMECYggWEEOwgBiCBcQQLCCGYAExBAuIIVhADMECYggWEOO/jJ5izESHF+4AAAAASUVORK5CYII=";
  //const options: any;

  public corpId: string;

  public tags: Tag[];
  public selectedTags: any[];

  public picDate: Date;
  //private picLocation: string;
  public picResolution: string;

  private locationCity: string;
  private locationState: string;
  public location: string;

  public events: EventModel[];
  public departments: string[] = ['Marketing and Communication', 'Fossil Hydro', 'Safety', 'Claims'];

  public eventName: string;
  public departmentName: string;
  public description: string;


  private latitude: number;
  private longitude: number;
  public locationDescription: string;

  private consoleMessage: string;
  public images = [];

  private isEnabled: boolean = false;
  public multiPhotos: boolean = false;



  constructor(public camera: Camera, public navCtrl: NavController, public geolocation: Geolocation,
    private toastCtrl: ToastController, public navParams: NavParams, public locationService: LocationServiceProvider,
     private alertCtrl: AlertController,  private uploadProvider: UploadServiceProvider, private imagePicker: ImagePicker) {

    //this.locationService.load(34.1252099, -81.18577359999999);
    this.base64Image = this.placeHolderImage;

    this.corpId = navParams.get('ID');

    this.getTags();
    //this.picDate = new Date();
    //this.picResolution = "1080 x 720";
    this.eventName = "";
    this.description = "";
    this.departmentName = "";

  //  this.getLocation();

    //this.locationDescription = "The House of Elrond";
    //this.location = "Rivendell, ME"
    this.getEvents();

    //this.locationCity = "Rivendell";
    //this.locationState = "ME";
    //this.description = "One does not simply walk into Mordor.";
    //this.corpId = "SH46000";
  }

  loadLocation(lat, long) {
    this.locationService.load(lat, long)
      .then(data => {
        let bestResults = data.results[0].address_components;

        for(let i = 0; i < bestResults.length; i++) {
          if(bestResults[i].types[0] === 'locality')
            this.locationCity = bestResults[i].long_name;
          if(bestResults[i].types[0] === 'administrative_area_level_1')
            this.locationState = bestResults[i].short_name;
        }

        this.location = this.locationCity + ", " + this.locationState;
      });
  }

  getLocation() {
    this.geolocation.getCurrentPosition().then((resp) => {
      this.latitude = resp.coords.latitude
      this.longitude = resp.coords.longitude
      this.loadLocation(this.latitude, this.longitude);

    }).catch((error) => {
      console.log('Error getting location', error);
    });

  }

  takePicture(photoSource, fab: FabContainer){

    this.multiPhotos = false;

    const cameraOptions: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.PNG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType: photoSource,
      targetWidth: 1000,
      targetHeight: 1000,
      saveToPhotoAlbum: false
      }


    this.camera.getPicture(cameraOptions).then((imageData) => {

         this.base64Image = "data:image/png;base64," + imageData;
         this.picDate = new Date();
         this.picResolution = "1080 x 720";
         this.getLocation();


    }, (err) => {
        console.log(err);
    });

    this.isPictureShown = true;
    fab.close()

  }

  selectMultiplePhotos(fab: FabContainer) {
    //this.imagePicker.requestReadPermission()
    this.multiPhotos = true;

    const imageOptions: ImagePickerOptions = {
      maximumImagesCount: 10
    }

    this.imagePicker.getPictures(imageOptions).then((results) => {
      for (var i = 0; i < results.length; i++) {
        this.images.push(results[i]);
      }
    }, (err) => { });

    this.getLocation();
    this.picDate = new Date();
    this.picResolution = "1080 x 720";

    this.isPictureShown = true;

    fab.close();
  }

  getTags() {
    this.tags = [
      { TagId: null, Name: "Storm", Description: null, Photos: [] },
      { TagId: null, Name: "Emergency", Description: null, Photos: [] },
      { TagId: null, Name: "Ice", Description: null, Photos: [] },
      { TagId: null, Name: "Community Service", Description: null, Photos: [] }
    ];
    this.uploadProvider.getTags()
    //.then(data => this.events = data)
    .then(data => {
      for(var i = 0; i < data.length; i++) {
        this.tags.push({
          TagId: data[i].TagId,
          Name: data[i].Title,
          Description: data[i].Description,
          Photos: []
        });
      }
    })
    .catch(error => {
      //alert(error);
    });
  }

  // getDepartment() {
  //   this.departments = ['Marketing and Communication', 'Fossil Hydro', 'Safety', 'Claims'];
  // }

  getEvents() {
    this.events = [
      { Description: null, Title: "Hurricane Matthew", EventId: 1, Photos: []},
      { Description: null, Title: "Flood of 2016", EventId: 1, Photos: []},
      { Description: null, Title: "Food Drive", EventId: 1, Photos: []},
      { Description: null, Title: "Hackathon", EventId: 1, Photos: []}
    ];
    this.uploadProvider.getEvents()
      //.then(data => this.events = data)
      .then(data => {
        for(var i = 0; i < data.length; i++) {
          this.events.push({
            Description: data[i].Description,
            Title: data[i].Title,
            EventId: data[i].EventId,
            Photos: []
          });
        }
      })
      .catch(error => {
        //alert(error);
      });
  }

  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'Is there someone outside of the company in this photo?',
      subTitle: 'Scana requires anyone outside of the company to be documented.',
      buttons: [
        {
          text: 'No',
          handler: data => {
            this.navCtrl.setRoot('PhotoUploadBasePage');
            let toast = this.toastCtrl.create({
              message: 'Picture was uploaded successfully.',
              duration: 3000,
              position: 'bottom'
            });
            toast.present();
          }
        },
        {
          text: 'Yes',
          handler: data => {
            this.navCtrl.setRoot('PhotoUploadReleasePage');
          }
        }
      ]
    });
    alert.present();
  }


  submit() {
    // Prompt release form
    this.showAlert();

    let upload: UploadModel = {
      PhotoId: null,
      Latitude: 23.12345,// this.latitude,
      Longitude: 65.12345,// this.longitude,
      LocationDescription: "Pine Island Clubhouse",// this.locationDescription,
      LocationCity: "Cayce",// this.locationCity,
      LocationState: "SC",// this.locationState,
      DateAdded: new Date(), //TODO new Date() ?
      Image: this.base64Image,
      Thumbnail: this.base64Image, //TODO
      Description: "Mock description",// this.description,
      ImageResolution: "1080 x 720",//this.picResolution,
      HasMediaRelease: false, //TODO
      StatusId: 1,
      EventId: 1,
      EmployeeId: "SH46000",//this.corpId,
      Event: null,
      Status: null,
      Tags: null
    };

    this.uploadProvider.uploadPhoto(upload)
      .then()
      .catch();
      // .then(res => alert(res))
      // .catch(e => alert(e));
  }

  isFormFinished(): boolean {
    if(this.eventName.length > 0 && this.description.length > 0 && this.isPictureShown) {
      this.isEnabled = true;
    }
    return this.isEnabled;
  }

  navigateToHomePage() {
    this.navCtrl.setRoot('HomeMockPage');
  }

}
