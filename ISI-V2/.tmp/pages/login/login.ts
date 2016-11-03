import { Component } from '@angular/core';

import { NavController, AlertController } from 'ionic-angular';
import { RegistrationPage } from '../registration/registration';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {
    
  }
  
  signUp(){
      this.navCtrl.push(RegistrationPage);
    };
    
  forgotPassword(){
   
      let prompt = this.alertCtrl.create({
      title: 'Reset Password',
      message: "Please enter valid email address",
      inputs: [
        {
          name: 'email',
          placeholder: 'Email'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Send',
          handler: data => {
            console.log('Saved clicked');
          }
        }
      ]
    });
    prompt.present();
  };
}
