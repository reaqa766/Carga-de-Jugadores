import { Component, OnInit } from '@angular/core';

// Service

import { PitcherseService } from '../../services/pitcherse.service';

import { ToastrService } from 'ngx-toastr';
// import { Subject } from 'rxjs/Subject';

// Class Player

import { Pitcher  } from '../../models/pitcher';
import { MAX_LENGTH_VALIDATOR } from '@angular/forms/src/directives/validators';




@Component({
  selector: 'app-pitcherse-list',
  templateUrl: './pitcherse-list.component.html',
  styleUrls: ['./pitcherse-list.component.css']
})
export class PitcherseListComponent implements OnInit {

  pitcherListOriginal: Pitcher[];
  pitcherList: Pitcher[];
  // players;
  // startAt =  new Subject();
  // endAt = new Subject();
  filter: string;


  constructor(
    private pitcherseService: PitcherseService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {

    this.pitcherseService.getPitchers()
        .snapshotChanges()
        .subscribe(item => {
          this.pitcherList = [];
          this.pitcherListOriginal = [];
          item.forEach(element => {
            const x = element.payload.toJSON();
            x['$keyP'] = element.key;
           // console.log(x);
            this.pitcherListOriginal.push(x as Pitcher);
          });
          this.pitcherList = this.pitcherListOriginal;
          // console.log(this.pitcherList);
          // this.playerService.getPlayerFilter(this.startAt, this.endAt)
          // .subscribe(players => this.players = players)
 });
  }

  onEdit(pitcher: Pitcher) {
    this.pitcherseService.selectedPitcher = Object.assign({}, pitcher);
    // console.log(this.pitcherseService.selectedPitcher);
  }

  onDelete($keyP: string) {

    this.pitcherseService.deletePitcher($keyP);
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


