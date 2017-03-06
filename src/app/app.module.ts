import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
/*Inclui para poder usar o NgFor*/
import {BrowserModule} from '@angular/platform-browser'
import { HttpModule } from '@angular/http';

import { TimesDeFutebolService } from '../pages/escolher-time/timesdefutebol.service';

import { LoginPage } from '../pages/login/login';
import { UserPage } from '../pages/user/user';
import { EscolherTimePage } from '../pages/escolher-time/escolher-time';
import { MemesPage } from '../pages/memes/memes';


@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    UserPage,
    EscolherTimePage,
    MemesPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    BrowserModule,
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    UserPage,
    EscolherTimePage,
    MemesPage
  ],
  providers: [
    TimesDeFutebolService
  ]
})
export class AppModule {}
