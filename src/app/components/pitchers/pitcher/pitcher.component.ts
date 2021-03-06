import { Component, OnInit } from '@angular/core';

// Service
import { PitcherService } from '../../../services/pitcher.service';

import { NgForm } from '@angular/forms';

// Player Class

import { Pitcher } from '../../../models/pitcher';



@Component({
  selector: 'app-pitcher',
  templateUrl: './pitcher.component.html',
  styleUrls: ['./pitcher.component.css']
})
export class PitcherComponent implements OnInit {

  constructor(private pitcherService: PitcherService) { }

  ngOnInit() {
    this.pitcherService.getPitchers();
    this.resetForm();

  }
  onSubmit(pitcherForm: NgForm) {
    // console.log(pitcherForm.value);
   if (!pitcherForm.value.$keyP) {
     // console.log( "Insert" );
    this.pitcherService.insertPitcher(pitcherForm.value);
    this.pitcherService.updatePitcher(pitcherForm.value.efectse)
   } else {
      // console.log("Update");
      this.pitcherService.updatePitcher(pitcherForm.value);
      this.pitcherService.updatePitcherse(pitcherForm.value);
    }
    this.resetForm(pitcherForm);
}


  resetForm(pitcherForm?: NgForm) { if (pitcherForm != null)pitcherForm.reset();

  this.pitcherService.selectedPitcher = new Pitcher();

  }
}

