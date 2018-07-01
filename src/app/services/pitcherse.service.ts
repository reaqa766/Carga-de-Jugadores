import { Injectable } from '@angular/core';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

import { Pitcher} from '../models/pitcher';

@Injectable({
  providedIn: 'root'
})
export class PitcherseService {
  pitcherList: AngularFireList<any>;
  selectedPitcher: Pitcher = new Pitcher();

  constructor(private firebase: AngularFireDatabase) { }

getPitchers() {
  this.pitcherList = this.firebase.list('pitchers');
  return this.pitcherList;
}





insertPitcher(pitcher: Pitcher) {
  this.pitcherList.push({
    nameP: pitcher.nameP,
    lastnameP: pitcher.lastnameP,
    InPitchse: pitcher.InPitchse,
    efectse: pitcher.efectse,
    hitsRse: pitcher.hitsRse,
    CSuciasse: pitcher.CSuciasse,
    CLimpiasse: pitcher.CLimpiasse,
    BBPermse: pitcher.BBPermse,
    PonchRse: pitcher.PonchRse








  });

}

updatePitcher(pitcher: Pitcher) {
this.pitcherList.update(pitcher.$keyP, {
  nameP: pitcher.nameP,
  lastnameP: pitcher.lastnameP,
  InPitchse: pitcher.InPitchse,
  efectse: pitcher.efectse,
  hitsRse: pitcher.hitsRse,
  CSuciasse: pitcher.CSuciasse,
  CLimpiasse: pitcher.CLimpiasse,
  BBPermse: pitcher.BBPermse,
  PonchRse: pitcher.PonchRse


});


}

deletePitcher(name: string) {
  this.pitcherList.remove(name);
}


}
