import { Component, OnInit } from '@angular/core';

// Service

import { PlayerService } from '../../../services/player.service';

import { ToastrService } from 'ngx-toastr';


//Class Player

import {Player  } from '../../../models/player';
import { MAX_LENGTH_VALIDATOR } from '@angular/forms/src/directives/validators';




@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css'],
})
export class PlayerListComponent implements OnInit {

  playerList: Player[];

  constructor(
    private playerService: PlayerService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {

    this.playerService.getPlayers()
        .snapshotChanges()
        .subscribe(item => {
          this.playerList = [];
          item.forEach(element => {
            let x = element.payload.toJSON();
            x["$key"] = element.key;
            this.playerList.push(x as Player)
          });
 
        });
  }

  onEdit(player: Player){
    this.playerService.selectedPlayer = Object.assign({},player);
  }

  onDelete($key: string){

    this.playerService.deletePlayer($key);
    // this.toastr.success('Operacion Realizada', 'Jugador Eliminado');

  }
}


