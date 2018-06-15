import { Injectable } from '@angular/core';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database'

import { Player} from '../models/player';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  playerList: AngularFireList<any>;
  selectedPlayer: Player = new Player();

  constructor(private firebase: AngularFireDatabase) { }

getPlayers()
{
  this.playerList = this.firebase.list('players');
  return this.playerList;
}

insertPlayer(player: Player) 
{
  this.playerList.push({
    name: player.name,
    lastname: player.lastname,
    //average: player.avg,
    vecesbate: player.vecesbate,
    carrerasa: player.carrerasa,
    hits: player.hits,
    carrerase: player.carrerase,
    basesr: player.basesr,
    homer: player.homer   
  })

}

updatePlayer(player: Player){
this.playerList.update(player.$key, {
 name: player.name,
    lastname: player.lastname,
    //average: player.avg,
    vecesbate: player.vecesbate,
    carrerasa: player.carrerasa,
    hits: player.hits,
    carrerase: player.carrerase,
    basesr: player.basesr,
    homer: player.homer   
 

})

}

deletePlayer(name: string)
{
  this.playerList.remove(name);
}


}
