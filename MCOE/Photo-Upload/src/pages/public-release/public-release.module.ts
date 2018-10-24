import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PublicReleasePage } from './public-release';
import { TextMaskModule } from 'angular2-text-mask';


@NgModule({
  declarations: [
    PublicReleasePage,
  ],
  imports: [
    IonicPageModule.forChild(PublicReleasePage),
    TextMaskModule
  ],
  exports: [
    PublicReleasePage
  ]
})
export class PublicReleasePageModule {}
