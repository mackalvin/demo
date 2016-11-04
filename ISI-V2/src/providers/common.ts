import { Injectable } from '@angular/core';
import { AlertController, LoadingController } from 'ionic-angular';

/*
  Generated class for the Common provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Common {
  
  loading: any;
  constructor(public alertCtrl: AlertController, public loadingCtrl: LoadingController) {
    console.log('Hello Common Provider');
  }
  
  showAlert(title, subTitle, buttonText) {
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: subTitle,
      buttons: [buttonText]
    });
    alert.present();
  };
  
  showLoader(message){
 
        this.loading = this.loadingCtrl.create({
            content: message
        });
 
        this.loading.present();
 
    }
  
}
