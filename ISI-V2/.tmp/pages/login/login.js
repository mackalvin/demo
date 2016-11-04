var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Auth } from '../../providers/auth';
import { Common } from '../../providers/common';
import { NavController, AlertController } from 'ionic-angular';
import { RegistrationPage } from '../registration/registration';
export var LoginPage = (function () {
    function LoginPage(navCtrl, alertCtrl, http, authService, commonService) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.http = http;
        this.authService = authService;
        this.commonService = commonService;
    }
    LoginPage.prototype.signIn = function () {
        var _this = this;
        // var url = 'http://jsonplaceholder.typicode.com/posts/1';
        // this.http.get(url).map(res => res.json()).subscribe(data => {
        // this.response = data.userId;
        // console.log(this.response);
        // });
        this.commonService.showLoader('Authenticating...');
        var credentials = {
            username: this.username,
            password: this.password
        };
        this.authService.login(credentials).then(function (result) {
            console.log(result);
            // Alert Show
            var alert = _this.alertCtrl.create({
                title: 'Login Success!',
                subTitle: 'You logged In!',
                buttons: ['OK']
            });
            alert.present();
            //Alert End
            _this.commonService.loading.dismiss();
        }, function (err) {
            // Alert Show
            var alert = _this.alertCtrl.create({
                title: 'Login Failed!',
                subTitle: err,
                buttons: ['OK']
            });
            alert.present();
            //Alert End
            console.log(err);
            _this.commonService.loading.dismiss();
        });
    };
    ;
    LoginPage.prototype.signUpForm = function () {
        this.navCtrl.push(RegistrationPage);
    };
    ;
    LoginPage.prototype.forgotPassword = function () {
        var prompt = this.alertCtrl.create({
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
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Send',
                    handler: function (data) {
                        console.log('Saved clicked');
                    }
                }
            ]
        });
        prompt.present();
    };
    ;
    LoginPage = __decorate([
        Component({
            selector: 'page-login',template:/*ion-inline-start:"/Users/mackalvin/Project/Intuitive Surgical/demo/ISI-V2/src/pages/login/login.html"*/'<ion-content class="padding page-parent">\n  <div>\n    <img src="assets/img/isi_logo.png">\n  </div>\n  <form name="signinForm" novalidate="">\n    \n    <ion-list>\n    \n      <ion-item class="textbox-background mob-content-center">\n        <ion-label floating>Username</ion-label>\n        <ion-input \n                  type="text"\n                  name="username" \n                  [(ngModel)]="username" \n                  ngModel minlength="5" \n                  ngModel maxlength="25" \n                  ngModel required>\n        </ion-input>\n      </ion-item>\n      \n      <ion-item class="textbox-background mob-content-center">\n        <ion-label floating>Password</ion-label>\n        <ion-input \n                  type="password"\n                  name="password"\n                  [(ngModel)]="password" \n                  ngModel minlength="5" \n                  ngModel maxlength="25" \n                  ngModel required>\n        </ion-input>\n      </ion-item>\n    \n    </ion-list>\n      \n     <p class="align-center">\n        <button ion-button class="button-background" (click)="signIn()">Sign In</button>\n     </p>\n  </form>\n  <p class="text-center mob-flex-center mob-content-center">\n    <a (click)="signUpForm()">Not Registered? Sign Up.</a>\n    <button class="button forget-password-button" (click)="forgotPassword()">Forgot Password</button>\n  </p>\n</ion-content>\n'/*ion-inline-end:"/Users/mackalvin/Project/Intuitive Surgical/demo/ISI-V2/src/pages/login/login.html"*/
        }), 
        __metadata('design:paramtypes', [NavController, AlertController, Http, Auth, Common])
    ], LoginPage);
    return LoginPage;
}());
//# sourceMappingURL=login.js.map