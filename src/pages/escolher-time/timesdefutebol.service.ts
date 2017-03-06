import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { TimesDeFutebol } from './timesdefutebol';
/*Dados mockados*/
//import { TIMESDOBRASIL } from './timesdobrasil.data';

@Injectable()
export class TimesDeFutebolService {

  constructor(private http: Http) { }

  getTimesDeFutebol() {
      //return TIMESDOBRASIL;

    return this.http.get('../../assets/json/times.json')
          .map(response => <TimesDeFutebol[]>response.json().clubes);
  }
}
