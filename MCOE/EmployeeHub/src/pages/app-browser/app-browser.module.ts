import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AppBrowserPage } from "./app-browser";

@NgModule({
  declarations: [
    AppBrowserPage,
  ],
  imports: [
    IonicPageModule.forChild(AppBrowserPage),
  ],
  exports: [
    AppBrowserPage
  ]
})
export class AppBrowserPageModule {}
