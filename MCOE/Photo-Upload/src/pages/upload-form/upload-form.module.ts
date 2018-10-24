import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UploadFormPage } from './upload-form';

@NgModule({
  declarations: [
    UploadFormPage,
  ],
  imports: [
    IonicPageModule.forChild(UploadFormPage),
  ],
  exports: [
    UploadFormPage
  ]
})
export class UploadFormPageModule {}
