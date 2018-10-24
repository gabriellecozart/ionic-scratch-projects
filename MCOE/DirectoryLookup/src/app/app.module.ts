import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ADService } from '../providers/ActiveDirectoryService';
import { SafeUrlPipe } from '../providers/safe-url.pipe'; 

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SafeUrlPipe
    
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [ADService, {provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
