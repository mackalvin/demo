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
    LoginPage.decorators = [
        { type: Component, args: [{
                    selector: 'page-login',
                    templateUrl: 'login.html'
                },] },
    ];
    /** @nocollapse */
    LoginPage.ctorParameters = [
        { type: NavController, },
        { type: AlertController, },
        { type: Http, },
        { type: Auth, },
        { type: Common, },
    ];
    return LoginPage;
}());
//# sourceMappingURL=login.js.map