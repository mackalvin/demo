import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { RegistrationPage } from '../pages/registration/registration';
import { Auth } from '../providers/auth';
import { Common } from '../providers/common';

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    RegistrationPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    RegistrationPage
  ],
  providers: [Storage, Auth, Common]
})
export class AppModule {}
