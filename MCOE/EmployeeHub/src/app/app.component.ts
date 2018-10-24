import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, AlertController, Loading} from 'ionic-angular';
import { StatusBar, Splashscreen, Push } from 'ionic-native';
import { PNService } from "../providers/push-notification-service/push-notification-service";


@Component({
    templateUrl: 'app.html'
})
export class MyApp {
    @ViewChild(Nav) nav: Nav;

    rootPage: any = 'HomeMockPage';

    pages: Array<{ title: string, component: any }>;
    loader: Loading;

    constructor(public platform: Platform,
        public alertCtrl: AlertController,
        public pnService: PNService
    ) {
        this.initializeApp();

        // used for an example of ngFor and navigation
        // this.pages = [
        //     { title: 'Home', component: 'HomePage' },
        //     { title: 'Take Picture', component: 'DetailPage' },
        //     { title: 'Locations', component: 'LocationsPage' },
        //     { title: 'Directory Lookup', component: 'ConnectedPage' },
        //     { title: 'connected', component: 'ConnectedPage' },
        //     { title: 'InAppBrowser', component: 'AppBrowserPage' },
        // ];

    }

    initializeApp() {
        this.platform.ready().then(() => {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            StatusBar.styleDefault();
            Splashscreen.hide();
            sessionStorage.setItem('alert', 'This is a breaking news ...................                                   We can push notifications now :)');
            this.initPushNotification();
        });
    }

    openPage(page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    }

    initPushNotification() {
        if (!this.platform.is('mobile')) {
            console.warn("Push notifications not initialized. Cordova is not available - Run in physical device");
            let alert = this.alertCtrl.create({ message: "in !this.platform.is('mobile')", buttons: [{ text: 'ok' }] });
            alert.present();
            return;
        }

        let push = Push.init({
            android: {
                senderID: "113476414717"
            },
            ios: {
                alert: "true",
                badge: "true",
                sound: "true"
            },
            windows: {}
        });

        push.on('registration', (data) => {
            console.log("device token ->", data.registrationId);
                this.loader.setContent("Registering device with Push service ...");

                this.pnService.registerDevice(data.registrationId).then(
                    data => {
                        this.loader.dismiss();
                    },
                    error => {
                        this.loader.dismiss();
                    });
            
        });

        push.on('notification', (data) => {

            //console.log('message', data.message);
            let self = this;
            //if user using app and push notification comes
            if (data.additionalData.foreground) {
                // if application open, show popup
                let confirmAlert = this.alertCtrl.create({
                    title: 'New Notification',
                    message: data.message,
                    buttons: [{
                        text: 'Ignore',
                        role: 'cancel'
                    }, {
                        text: 'View',
                        handler: () => {
                            sessionStorage.setItem('alert', data.message);
                            self.nav.push('HomePage');
                        }
                    }]
                });
                confirmAlert.present();
            } else {
                console.log("Push notification clicked");
                sessionStorage.setItem('alert', data.message);
                self.nav.push('HomePage');
            }
        });
        push.on('error', (e) => {
            console.log(e.message);
            let alert = this.alertCtrl.create({
                message: "in push.on error" + e.message, buttons: [{ text: 'ok' }]
            });
            alert.present();
        });
    }
}
