import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConnectedDetailPage } from "./connected-detail";

@NgModule({
  declarations: [
    ConnectedDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(ConnectedDetailPage)
  ],
  exports: [
    ConnectedDetailPage
  ]
})
export class ConnectedDetailPageModule {}
