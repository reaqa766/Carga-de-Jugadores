import { Injectable } from '@angular/core';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

import { Pitcher} from '../models/pitcher';

@Injectable({
  providedIn: 'root'
})
export class PitcherService {

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
    InPitch: pitcher.InPitch,
    hitsR: pitcher.hitsR,
    CSucias: pitcher.CSucias,
    CLimpias: pitcher.CLimpias,
    BBPerm: pitcher.BBPerm,
    PonchR: pitcher.PonchR,
    InPitchse: pitcher.InPitch,
    hitsRse: pitcher.hitsR,
    CSuciasse: pitcher.CSucias,
    CLimpiasse: pitcher.CLimpias,
    BBPermse: pitcher.BBPerm,
    PonchRse: pitcher.PonchR








  });

}

updatePitcherse(pitcher: Pitcher) {
 
  this.pitcherList.update(pitcher.$keyP, {
    // name: player.name,
    // lastname: player.lastname,
    // average: player.avg,
    InPitchse: pitcher.InPitch+pitcher.InPitchse,
    hitsRse: pitcher.hitsR+pitcher.hitsRse,
    CSuciasse: pitcher.CSucias+pitcher.CSuciasse,
    CLimpiasse: pitcher.CLimpias+pitcher.CLimpiasse,
    BBPermse: pitcher.BBPerm+pitcher.BBPermse,
    PonchRse: pitcher.PonchR+pitcher.PonchRse


});
}


updatePitcher(pitcher: Pitcher) {
this.pitcherList.update(pitcher.$keyP, {
  nameP: pitcher.nameP,
  lastnameP: pitcher.lastnameP,
  InPitch: pitcher.InPitch,
  hitsR: pitcher.hitsR,
  CSucias: pitcher.CSucias,
  CLimpias: pitcher.CLimpias,
  BBPerm: pitcher.BBPerm,
  PonchR: pitcher.PonchR


});

}

deletePitcher(name: string) {
  this.pitcherList.remove(name);
}


}
