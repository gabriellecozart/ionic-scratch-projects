import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BasePage } from './base';
import { Camera } from '@ionic-native/camera';
import { UploadServiceProvider } from '../../providers/upload-service/upload-service';
import { LocationServiceProvider } from '../../providers/location-service/location-service';


@NgModule({
  declarations: [
    BasePage,
  ],
  imports: [
    IonicPageModule.forChild(BasePage),
  ],
  exports: [
    BasePage
  ],
  providers: [
    Camera,
    UploadServiceProvider,
    LocationServiceProvider
  ]
})
export class BasePageModule {}
