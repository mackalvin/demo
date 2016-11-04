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
    RegistrationPage = __decorate([
        Component({
            selector: 'page-registration',template:/*ion-inline-start:"/Users/mackalvin/Project/Intuitive Surgical/demo/ISI-V2/src/pages/registration/registration.html"*/'<ion-header>\n\n    <ion-navbar>\n\n      <ion-title>Sign Up</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content class="padding page-parent">\n\n    <form class="form" id="nameform" novalidate="">\n\n        \n\n        <ion-list>\n\n\n\n            <ion-item class="textbox-background mob-content-center">\n\n                <ion-label floating>FirstName</ion-label>\n\n                <ion-input \n\n                        type="text"\n\n                        name="firstname"\n\n                        [(ngModel)]="firstname" \n\n                        ngModel maxlength="25" \n\n                        ngModel required>\n\n                </ion-input>\n\n            </ion-item>\n\n            \n\n            <ion-item class="textbox-background mob-content-center">\n\n                <ion-label floating>LastName</ion-label>\n\n                <ion-input \n\n                        type="text" \n\n                        name="lastname"\n\n                        [(ngModel)]="lastname"\n\n                        ngModel maxlength="25" \n\n                        ngModel required>\n\n                </ion-input>\n\n            </ion-item>\n\n            \n\n            <ion-item class="textbox-background mob-content-center">\n\n                <ion-label floating>Email</ion-label>\n\n                <ion-input \n\n                        type="text" \n\n                        name="email"\n\n                        [(ngModel)]="email"\n\n                        ngModel maxlength="25" \n\n                        ngModel required>\n\n                </ion-input>\n\n            </ion-item>\n\n            \n\n            <ion-item class="textbox-background mob-content-center">\n\n                <ion-label floating>Password</ion-label>\n\n                <ion-input \n\n                        type="password" \n\n                        name="password"\n\n                        [(ngModel)]="password"\n\n                        ngModel minlength="5"\n\n                        ngModel maxlength="25" \n\n                        ngModel required>\n\n                </ion-input>\n\n            </ion-item>\n\n            \n\n            <ion-item class="textbox-background mob-content-center">\n\n                <ion-label floating>Confirm Password</ion-label>\n\n                <ion-input \n\n                        type="password" \n\n                        name="confirmpassword"\n\n                        \n\n                        ng-change="view.confirmPassword()"\n\n                        ngModel required>\n\n                </ion-input>\n\n            </ion-item>\n\n            \n\n            <ion-item class="textbox-background mob-content-center">\n\n                <ion-label floating>Mobile</ion-label>\n\n                <ion-input \n\n                        type="tel" \n\n                        name="mobile"\n\n                        ng-change="view.onChange(\'mobile\')"\n\n                        [(ngModel)]="mobile"\n\n                        ngModel minlength="10"\n\n                        ngModel maxlength="10" \n\n                        ngModel required>\n\n                </ion-input>\n\n            </ion-item>\n\n    \n\n        </ion-list>\n\n        \n\n    </form>\n\n    <div class="bar bar-footer background-color registration-footer mob-content-center">\n\n        <button ion-button class="button-background" form="nameform" (click)="signUp()">Sign Up</button>\n\n    </div>\n\n</ion-content>'/*ion-inline-end:"/Users/mackalvin/Project/Intuitive Surgical/demo/ISI-V2/src/pages/registration/registration.html"*/
        }), 
        __metadata('design:paramtypes', [NavController, Auth, Common])
    ], RegistrationPage);
    return RegistrationPage;
}());
//# sourceMappingURL=registration.js.map