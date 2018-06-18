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
    PonchR: pitcher.PonchR








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
