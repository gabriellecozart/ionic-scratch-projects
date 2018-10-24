import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController, Loading } from 'ionic-angular';
import { DomSanitizer } from '@angular/platform-browser';
import { ContactFindOptions, ContactName, ContactField, ContactOrganization, Contact, Contacts } from "@ionic-native/contacts";
import { ADService } from "../../providers/active-directory-service/active-directory-service";
import { employee } from "../../models/employee/employee";

/**
 * Generated class for the DirectoryLookupPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-directory-lookup',
  templateUrl: 'directory-lookup.html',
})
export class DirectoryLookupPage {

  ANR: string = "";
    Department: string = "";
    PhoneLast4: string = "";
    PhoneAreaCd: string = "";
    PhoneFirst3: string = "";

    employees: employee[] = [];
    showResult: boolean = false;
    NoEmpFoundMessage: string;
    loader: Loading;

    constructor(public navCtrl: NavController
        , public loadingCtrl: LoadingController
        , public alertCtrl: AlertController
        , public sanitizer: DomSanitizer
        , public adService: ADService
        , private contacts: Contacts
    ) { }

    // //sanitize safeurl to implement sms
    // sanitize(url: string) {
    //     return this.sanitizer.bypassSecurityTrustUrl(url);
    // }

    // search() {
    //     //clear out the previous array contents
    //     this.employees = [];
    //     this.showResult = true;

    //     //Create the loading indicator
    //     this.loader = this.loadingCtrl.create({
    //         content: "Searching ..."
    //     });

    //     //Show the loading indicator
    //     this.loader.present();


    //     //sometimes the vpn tunnel is slow to open. 
    //     //Lets call AD service Test api 3 times to wake up the tunnel
    //     this.adService.warmupCalltoADService().then(
    //         data => {
    //             //tunnel open, Ad service is awake and responding....
    //             this.adSearch();
    //         },
    //         error => {
    //             //probably vpn tunnel did not open - try again
    //             this.adService.warmupCalltoADService().then(
    //                 data => {
    //                     //tunnel open, Ad service is awake and responding....
    //                     this.adSearch();
    //                 },
    //                 error => {
    //                     //probably vpn tunnel did not open - try again
    //                     this.adService.warmupCalltoADService().then(
    //                         data => {
    //                             //tunnel open, Ad service is awake and responding....
    //                             this.adSearch();
    //                         },
    //                         error => {
    //                             //enough is enough -  lets try to fetch -  will throw error if need be!
    //                             this.adSearch();
    //                         });
    //                 });
    //         });
    // }

    // adSearch() {
    //     var phone: string = "";
    //     if (this.PhoneAreaCd ) {
    //         phone = '(' + this.PhoneAreaCd + ')';
    //     }
    //     if (this.PhoneFirst3) { phone = phone + this.PhoneFirst3 + '-'; }
    //     if (this.PhoneLast4) {
    //         if (this.PhoneFirst3) { phone =  phone + this.PhoneLast4 }
    //         else { phone = phone + '-' + this.PhoneLast4; }
    //     }
    //     this.adService.search(this.ANR, this.Department, phone).then(
    //         data => {

    //             //Hide the loading indicator
    //             this.loader.dismiss();
    //             this.NoEmpFoundMessage = "";
    //             //Now, populate the array with data from the change service
    //             if (data.length > 0) {
    //                 //We have data, so lets do something with it
    //                 for (var i = 0; i < data.length; i++) {
    //                     this.employees.push(new employee(data[i].NetworkID, data[i].FirstName, data[i].LastName, data[i].EmailID
    //                         , data[i].WorkNumber, data[i].CellNumber, data[i].JobTitle, data[i].Company, data[i].DisplayName
    //                         , data[i].Department, data[i].EmpImage, data[i].MailCode, data[i].WorkExtension));

    //                 }
    //             } else {
    //                 this.NoEmpFoundMessage = "No employee(s) found for specified criteria ";
    //             }
    //         },
    //         error => {
    //             //Hide the loading indicator
    //             this.loader.dismiss();
    //             this.showAlert(error);
    //         }
    //     );
    // }

    // showAlert(message: string) {
    //     let alert = this.alertCtrl.create({
    //         title: 'Error',
    //         subTitle: 'Source: Active Directory Service',
    //         message: message,
    //         buttons: [{ text: 'Sorry' }]
    //     });
    //     alert.present();
    // }

    // addContact(employee) {

    //     let loader = this.loadingCtrl.create({
    //         content: "Syncing Contacts..."
    //     });

    //     //Show the loading indicator
    //     loader.present();
    //     try {

    //         //see if the contact exists. If yes, then delete and create new.
    //         var options = new ContactFindOptions();
    //         options.filter = employee.NetworkID; //Use NetworkID to search in the organizations[0].title field
    //         options.multiple = false;
    //         options.desiredFields = [navigator.contacts.fieldType.id];
    //         var fields = [navigator.contacts.fieldType.organizations];

    //         navigator.contacts.find(fields,
    //             (contacts) => {
    //                 if (contacts.length > 0) {
    //                     var contact = contacts[0];
    //                     //delete the contact and create new
    //                     contact.remove(() => { }, () => { });
    //                 }
    //                 this.createNewContact(employee);
    //                 loader.dismiss();

    //             },
    //             (error) => {
    //                 //no user found, create new
    //                 this.createNewContact(employee);
    //                 loader.dismiss();
    //             }
    //         , options);
    //         }
    //     catch(e) {
    //         loader.dismiss();
    //         this.showAlert("Exception encountered : " + e.message);
    //     }
    // }

    // createNewContact(employee) {
    //     var contact = navigator.contacts.create();

    //     contact.displayName = employee.DisplayName; //apparently DisplayName is not supported in iOS
    //     // contact.nickname = employee.NetworkID; //Use NetworkID as unique Identifier
    //     // contact.id = employee.DisplayName; //prevent duplicates - NOT!!!  This is a Globally unique number generated by iPhone Contacts. 

    //     var name = new ContactName();
    //     name.givenName = employee.FirstName;
    //     name.familyName = employee.LastName;
    //     contact.name = name;

    //     var phoneNumbers = [];
    //     phoneNumbers[0] = new ContactField('work', employee.WorkNumber, false);
    //     phoneNumbers[1] = new ContactField('mobile', employee.CellNumber, true); // preferred number
    //     contact.phoneNumbers = phoneNumbers;

    //     var emails = [];
    //     emails[0] = new ContactField('email', employee.EmailID);
    //     contact.emails = emails;

    //     if (employee.EmpImage != null) {
    //         var photos = [];
    //         photos[0] = new ContactField('base64', 'data:image/jpeg;base64,' + employee.EmpImage);
    //         contact.photos = photos;
    //     }

    //     var organizations = [];
    //     organizations[0] = new ContactOrganization(true, 'Company', employee.Company, employee.JobTitle + " (" + employee.Department + ")", employee.NetworkID); //Using JobTitle field to save the Network ID - unique key for search
    //     contact.organizations = organizations;

    //     contact.save(() => {}
    //         , (contactError) => { this.showAlert("Error saving Contact!! Error: " + contactError.message); });
    // }

    navigateToHomePage() {
      this.navCtrl.setRoot('HomeMockPage');
    }
}
