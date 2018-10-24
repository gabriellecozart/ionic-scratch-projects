import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RoomFinderMenuPage } from './room-finder-menu';

@NgModule({
  declarations: [
    RoomFinderMenuPage,
  ],
  imports: [
    IonicPageModule.forChild(RoomFinderMenuPage),
  ],
  exports: [
    RoomFinderMenuPage
  ]
})
export class RoomFinderMenuPageModule {}
