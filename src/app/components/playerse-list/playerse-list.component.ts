import { Component, OnInit } from '@angular/core';

// Service

import { PlayerService } from '../../services/player.service';

import { ToastrService } from 'ngx-toastr';
// import { Subject } from 'rxjs/Subject';

// Class Player

import {Player  } from '../../models/player';
import { MAX_LENGTH_VALIDATOR } from '@angular/forms/src/directives/validators';



@Component({
  selector: 'app-playerse-list',
  templateUrl: './playerse-list.component.html',
  styleUrls: ['./playerse-list.component.css']
})
export class PlayerseListComponent implements OnInit {

  playerListOriginal: Player[];
  playerList: Player[];
  // players;
  // startAt =  new Subject();
  // endAt = new Subject();
  filter: string;


  constructor(
    private playerService: PlayerService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {

    this.playerService.getPlayers()
        .snapshotChanges()
        .subscribe(item => {
          this.playerList = [];
          this.playerListOriginal = [];
          item.forEach(element => {
            const x = element.payload.toJSON();
            x['$key'] = element.key;
            this.playerListOriginal.push(x as Player);
          });
          this.playerList = this.playerListOriginal;
          // this.playerService.getPlayerFilter(this.startAt, this.endAt)
          // .subscribe(players => this.players = players)
 });
  }

  onEdit(player: Player) {
    this.playerService.selectedPlayer = Object.assign({}, player);
  }

  onDelete($key: string) {

    this.playerService.deletePlayer($key);
    // this.toastr.success('Operacion Realizada', 'Jugador Eliminado');

  }
  searchPlayer(value) {
    this.filter = value;
    const aux = [];
    this.playerList = this.playerListOriginal;
    if (!(this.filter === '') && !(this.filter === undefined)) {
      for (const player of this.playerList) {
        if (player.name.toLowerCase().includes(this.filter.toLowerCase()) || player.lastname.toLowerCase().includes
        (this.filter.toLowerCase())) {
          aux.push(player);
        }
      }
      this.playerList = aux;
    }

  }
}


