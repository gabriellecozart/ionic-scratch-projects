import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MapsAndDirectionsPage } from './maps-and-directions';

@NgModule({
  declarations: [
    MapsAndDirectionsPage,
  ],
  imports: [
    IonicPageModule.forChild(MapsAndDirectionsPage),
  ],
  exports: [
    MapsAndDirectionsPage
  ]
})
export class MapsAndDirectionsPageModule {}
