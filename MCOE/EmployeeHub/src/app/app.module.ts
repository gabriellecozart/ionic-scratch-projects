import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { InAppBrowser} from '@ionic-native/in-app-browser';
import { MyApp } from './app.component';

import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { Geolocation } from '@ionic-native/geolocation';
import { Camera } from '@ionic-native/camera';
import { ImagePicker } from '@ionic-native/image-picker';
import { TextMaskModule } from 'angular2-text-mask';
import { Contacts } from '@ionic-native/contacts';
import { SafePipe } from "../pipes/safe/safe.pipe";
import { SafeUrlPipe } from "../pipes/safe-url/safe-url.pipe";
import { HeadlineService } from "../providers/headline-service/headline-service";
import { PNService } from "../providers/push-notification-service/push-notification-service";
import { UploadServiceProvider } from "../providers/upload-service/upload-service";
import { LocationServiceProvider } from "../providers/location-service/location-service";
import { ADService } from "../providers/active-directory-service/active-directory-service";



@NgModule({
  declarations: [
    MyApp,
    SafePipe,
    SafeUrlPipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    TextMaskModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    HeadlineService, 
    PNService, 
    InAppBrowser, 
    Camera,
    Geolocation,
    ImagePicker,
    UploadServiceProvider,
    LocationServiceProvider,
    Contacts,
    ADService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
