import { Component, OnInit } from '@angular/core';

// Service
import { PlayerseService } from '../../services/playerse.service';

import { NgForm } from '@angular/forms';

// Player Class
import { Player } from '../../models/player';

@Component({
  selector: 'app-playerse',
  templateUrl: './playerse.component.html',
  styleUrls: ['./playerse.component.css']
})
export class PlayerseComponent implements OnInit {

 

  constructor(private playerseService: PlayerseService) { }

  ngOnInit() {
    this.playerseService.getPlayers();
    this.resetForm();

  }
  onSubmit(playerForm: NgForm) {
    console.log(playerForm.value);
   if (!playerForm.value.$key) {
     // console.log( "Insert" );
    this.playerseService.insertPlayer(playerForm.value);
   } else {
      // console.log("Update");
      this.playerseService.updatePlayer(playerForm.value);
    }
    this.resetForm(playerForm);
}


  resetForm(playerForm?: NgForm) {
  if (playerForm !=null)playerForm.reset();

  this.playerseService.selectedPlayer = new Player();

  }

}
