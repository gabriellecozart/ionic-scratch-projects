import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PhotoUploadReleasePage } from './photo-upload-release';

@NgModule({
  declarations: [
    PhotoUploadReleasePage,
  ],
  imports: [
    IonicPageModule.forChild(PhotoUploadReleasePage),
  ],
  exports: [
    PhotoUploadReleasePage
  ]
})
export class PhotoUploadReleasePageModule {}
