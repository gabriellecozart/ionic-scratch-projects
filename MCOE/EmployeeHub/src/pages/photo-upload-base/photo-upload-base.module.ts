import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PhotoUploadBasePage } from './photo-upload-base';

@NgModule({
  declarations: [
    PhotoUploadBasePage,
  ],
  imports: [
    IonicPageModule.forChild(PhotoUploadBasePage),
  ],
  exports: [
    PhotoUploadBasePage
  ]
})
export class PhotoUploadBasePageModule {}
