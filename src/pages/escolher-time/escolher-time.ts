import { Component } from '@angular/core';
//import { BrowserModule } from '@angular/platform-browser'
import { NavController, NavParams } from 'ionic-angular';
/*import { Facebook, NativeStorage } from 'ionic-native';*/
//import { LoginPage } from '../login/login';
/*TimesDeFutebol eq Races*/
import { TimesDeFutebol } from './timesdefutebol';
//import { TIMESDOBRASIL } from './timesdobrasil.data';
import { TimesDeFutebolService } from './timesdefutebol.service';
import { MemesPage } from '../memes/memes';



/*
  Generated class for the EscolherTime page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-escolher-time',
  templateUrl: 'escolher-time.html'
})

export class EscolherTimePage {

  Times: TimesDeFutebol[];

  constructor(public navCtrl: NavController, private timesService: TimesDeFutebolService) { }

  ngOnInit() {
    //DataService sem HTTP this.Times = this.timesService.getTimesDeFutebol();

    this.timesService.getTimesDeFutebol()
        .subscribe(data => this.Times = data);

  }

/*
Sem usar dataService
  Times: TimesDeFutebol[];

  ngOnInit() {
    this.Times = TIMESDOBRASIL;
  }
*/

  //constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad EscolherTimePage');
  }

  //FRED - Funcao para pegar mudanca no ion-select
  onChange() {
    console.log('Escolheu o time');
  }


  //goToMemes(login: string) {
  goToMemes() {
    this.navCtrl.push(MemesPage);
  }



}
