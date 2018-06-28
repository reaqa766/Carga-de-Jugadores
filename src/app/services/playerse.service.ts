import { Injectable } from '@angular/core';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

import { Player} from '../models/player';

@Injectable({
  providedIn: 'root'
})
export class PlayerseService {

  playerList: AngularFireList<any>;
  selectedPlayer: Player = new Player();

  constructor(private firebase: AngularFireDatabase) { }

getPlayers() {
  this.playerList = this.firebase.list('players');
  return this.playerList;
}





insertPlayer(player: Player) {
  this.playerList.push({
    name: player.name,
    lastname: player.lastname,
    nameP: player.nameP,
    lastnameP: player.lastnameP,
    // average: player.avg,
    vecesbate: player.vecesbatese,
    carrerasa: player.carrerasase,
    hits: player.hitsse,
    carrerase: player.carrerasese,
    basesr: player.basesrse,
    homer: player.homerse,
    InPitch: player.InPitchse,
    hitsR: player.hitsRse,
    CSucias: player.CSuciasse,
    CLimpias: player.CLimpiasse,
    BBPerm: player.BBPermse,
    PonchR: player.PonchRse








  });

}

updatePlayer(player: Player) {
this.playerList.update(player.$key, {
    name: player.name,
    lastname: player.lastname,
    // average: player.avg,
    vecesbate: player.vecesbatese,
    carrerasa: player.carrerasase,
    hits: player.hitsse,
    carrerase: player.carrerasese,
    basesr: player.basesrse,
    homer: player.homerse


});

}

deletePlayer(name: string) {
  this.playerList.remove(name);
}


}

