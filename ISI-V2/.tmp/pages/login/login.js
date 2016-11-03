import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { RegistrationPage } from '../registration/registration';
export var LoginPage = (function () {
    function LoginPage(navCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
    }
    LoginPage.prototype.signUp = function () {
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
    ];
    return LoginPage;
}());
//# sourceMappingURL=login.js.map