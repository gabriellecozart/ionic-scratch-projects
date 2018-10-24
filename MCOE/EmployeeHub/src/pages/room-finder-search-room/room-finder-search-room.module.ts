import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RoomFinderSearchRoomPage } from './room-finder-search-room';

@NgModule({
  declarations: [
    RoomFinderSearchRoomPage,
  ],
  imports: [
    IonicPageModule.forChild(RoomFinderSearchRoomPage),
  ],
  exports: [
    RoomFinderSearchRoomPage
  ]
})
export class RoomFinderSearchRoomPageModule {}
