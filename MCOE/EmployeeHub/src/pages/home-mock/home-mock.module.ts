import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomeMockPage } from "./home-mock";

@NgModule({
  declarations: [
    HomeMockPage,
  ],
  imports: [
    IonicPageModule.forChild(HomeMockPage),
  ],
  exports: [
    HomeMockPage
  ]
})
export class HomeMockPageModule {}
