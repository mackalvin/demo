import { Component } from '@angular/core';
import { Auth } from '../../providers/auth';
import { Common } from '../../providers/common';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
export var RegistrationPage = (function () {
    function RegistrationPage(navCtrl, authService, commonService) {
        this.navCtrl = navCtrl;
        this.authService = authService;
        this.commonService = commonService;
    }
    RegistrationPage.prototype.signUp = function () {
        var _this = this;
        this.commonService.showLoader('Please wait...');
        var details = {
            firstname: this.firstname,
            lastname: this.lastname,
            email: this.email,
            password: this.password,
            mobile: this.mobile,
        };
        this.authService.createAccount(details).then(function (result) {
            console.log(result);
            _this.commonService.loading.dismiss();
            _this.commonService.showAlert("Success!", "Your registration is successful", "Ok");
            _this.navCtrl.setRoot(LoginPage);
        }, function (err) {
            console.log(err);
            _this.commonService.loading.dismiss();
        });
    };
    ;
    RegistrationPage.decorators = [
        { type: Component, args: [{
                    selector: 'page-registration',
                    templateUrl: 'registration.html'
                },] },
    ];
    /** @nocollapse */
    RegistrationPage.ctorParameters = [
        { type: NavController, },
        { type: Auth, },
        { type: Common, },
    ];
    return RegistrationPage;
}());
//# sourceMappingURL=registration.js.map