import { Component } from '@angular/core';

import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import { Auth } from '../../providers/auth';
import { Common } from '../../providers/common';
import { NavController, AlertController, LoadingController } from 'ionic-angular';
import { RegistrationPage } from '../registration/registration';


@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  username: string;
  password: string;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, public http: Http, public authService: Auth, public commonService: Common) {

  }

  signIn(){
    // var url = 'http://jsonplaceholder.typicode.com/posts/1';
    // this.http.get(url).map(res => res.json()).subscribe(data => {
    // this.response = data.userId;
    // console.log(this.response);
    // });
    this.commonService.showLoader('Authenticating...');

    let credentials = {
        username: this.username,
        password: this.password
    }

    this.authService.login(credentials).then((result) => {
      console.log(result);
      // Alert Show
      let alert = this.alertCtrl.create({
        title: 'Login Success!',
        subTitle: 'You logged In!',
        buttons: ['OK']
      });
      alert.present();
      //Alert End
      this.commonService.loading.dismiss();
    }, (err) => {
        // Alert Show
        let alert = this.alertCtrl.create({
          title: 'Login Failed!',
          subTitle: err,
          buttons: ['OK']
        });
        alert.present();
        //Alert End
      console.log(err);
      this.commonService.loading.dismiss();
    });

  };

  signUpForm(){
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
