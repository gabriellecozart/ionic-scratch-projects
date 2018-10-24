import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DirectoryLookupPage } from "./directory-lookup";

@NgModule({
  declarations: [
    DirectoryLookupPage,
  ],
  imports: [
    IonicPageModule.forChild(DirectoryLookupPage),
  ],
  exports: [
    DirectoryLookupPage
  ]
})
export class DirectoryLookupPageModule {}
