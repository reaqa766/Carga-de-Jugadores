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
    // nameP: player.nameP,
    // lastnameP: player.lastnameP,
    // average: player.avg,
    vecesbatese: player.vecesbatese,
    carrerasase: player.carrerasase,
    hitsse: player.hitsse,
    carrerasese: player.carrerasese,
    basesrse: player.basesrse,
    homerse: player.homerse,
    // InPitchse: player.InPitchse,
    // hitsRse: player.hitsRse,
    // CSuciasse: play  er.CSuciasse,
    // CLimpiasse: player.CLimpiasse,
    // BBPermse: player.BBPermse,
    // PonchRse: player.PonchRse








  });

}

updatePlayer(player: Player) {
this.playerList.update(player.$key, {
    name: player.name,
    lastname: player.lastname,
    // average: player.avg,
    vecesbatese: player.vecesbatese,
    carrerasase: player.carrerasase,
    hitsse: player.hitsse,
    carrerasese: player.carrerasese,
    basesrse: player.basesrse,
    homerse: player.homerse


});

}

deletePlayer(name: string) {
  this.playerList.remove(name);
}


test(t) {      //defining a function
  if (t === undefined) {       //if t=undefined, call tt
        console.log(t)      //call t
  }
  return t;    
}



}



