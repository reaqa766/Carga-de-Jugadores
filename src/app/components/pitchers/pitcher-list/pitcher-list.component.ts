import { Component, OnInit } from '@angular/core';

// Service

import { PitcherService } from '../../../services/pitcher.service';

import { ToastrService } from 'ngx-toastr';
// import { Subject } from 'rxjs/Subject';

// Class Player

import { Pitcher  } from '../../../models/pitcher';
import { MAX_LENGTH_VALIDATOR } from '@angular/forms/src/directives/validators';




@Component({
  selector: 'app-pitcher-list',
  templateUrl: './pitcher-list.component.html',
  styleUrls: ['./pitcher-list.component.css']
})
export class PitcherListComponent implements OnInit {

  pitcherListOriginal: Pitcher[];
  pitcherList: Pitcher[];
  // players;
  // startAt =  new Subject();
  // endAt = new Subject();
  filter: string;


  constructor(
    private pitcherService: PitcherService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {

    this.pitcherService.getPitchers()
        .snapshotChanges()
        .subscribe(item => {
          this.pitcherList = [];
          this.pitcherListOriginal = [];
          item.forEach(element => {
            const x = element.payload.toJSON();
            x['$keyP'] = element.key;
            this.pitcherListOriginal.push(x as Pitcher);
          });
          this.pitcherList = this.pitcherListOriginal;
          // this.playerService.getPlayerFilter(this.startAt, this.endAt)
          // .subscribe(players => this.players = players)
 });
  }

  onEdit(pitcher: Pitcher) {
    this.pitcherService.selectedPitcher = Object.assign({}, pitcher);
  }

  onDelete($keyP: string) {

    this.pitcherService.deletePitcher($keyP);
    // this.toastr.success('Operacion Realizada', 'Jugador Eliminado');

  }
  searchPitcher(value) {
    this.filter = value;
    const aux = [];
    this.pitcherList = this.pitcherListOriginal;
    if (!(this.filter === '') && !(this.filter === undefined)) {
      for (const pitcher of this.pitcherList) {
        if (pitcher.nameP.toLowerCase().includes(this.filter.toLowerCase()) || pitcher.lastnameP.toLowerCase().includes
        (this.filter.toLowerCase())) {
          aux.push(pitcher);
        }
      }
      this.pitcherList = aux;
    }

  }
}


