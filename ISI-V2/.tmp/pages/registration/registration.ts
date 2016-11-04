import { Component } from '@angular/core';

import { Auth } from '../../providers/auth';
import { Common } from '../../providers/common';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-registration',
  templateUrl: 'registration.html'
})
export class RegistrationPage {

  public details: any;
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  mobile: string;

  constructor(public navCtrl: NavController, public authService: Auth, public commonService: Common) {

  }

  signUp(){

    this.commonService.showLoader('Please wait...');

    let details = {
        firstname: this.firstname,
        lastname: this.lastname,
        email: this.email,
        password: this.password,
        mobile: this.mobile,
    }

    this.authService.createAccount(details).then((result) => {
      console.log(result);
      this.commonService.loading.dismiss();
      this.commonService.showAlert("Success!", "Your registration is successful", "Ok");
      this.navCtrl.setRoot(LoginPage);
    }, (err) => {
      console.log(err);
      this.commonService.loading.dismiss();
    });

  };
}
