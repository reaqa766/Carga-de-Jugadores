import { Component, OnInit } from '@angular/core';

// Service
import { PlayerService } from '../../../services/player.service';

import { NgForm } from '@angular/forms';

// Player Class
import { Player } from '../../../models/player';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

  constructor(private playerService: PlayerService) { }

  ngOnInit() {
    this.playerService.getPlayers();
    this.resetForm();

  }
  onSubmit(playerForm: NgForm) {
    console.log(playerForm.value);
   if (!playerForm.value.$key) {
     // console.log( "Insert" );
    this.playerService.insertPlayer(playerForm.value);
   } else {
      // console.log("Update");
      this.playerService.updatePlayer(playerForm.value);
    }
    this.resetForm(playerForm);
}


  resetForm(playerForm?: NgForm) {
  if (playerForm !=null)playerForm.reset();

  this.playerService.selectedPlayer = new Player();

  }

}
