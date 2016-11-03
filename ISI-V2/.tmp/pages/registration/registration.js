import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
export var RegistrationPage = (function () {
    function RegistrationPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    RegistrationPage.decorators = [
        { type: Component, args: [{
                    selector: 'page-registration',
                    templateUrl: 'registration.html'
                },] },
    ];
    /** @nocollapse */
    RegistrationPage.ctorParameters = [
        { type: NavController, },
    ];
    return RegistrationPage;
}());
//# sourceMappingURL=registration.js.map