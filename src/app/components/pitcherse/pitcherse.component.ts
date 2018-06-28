import { Component, OnInit } from '@angular/core';

// Service
import { PitcherService } from '../../services/pitcher.service';


import { NgForm } from '@angular/forms';

// Player Class
import { Pitcher } from '../../models/pitcher';




@Component({
  selector: 'app-pitcherse',
  templateUrl: './pitcherse.component.html',
  styleUrls: ['./pitcherse.component.css']
})
export class PitcherseComponent implements OnInit {

  constructor(private pitcherService: PitcherService) { }

  ngOnInit() {
    this.pitcherService.getPitchers();
    this.resetForm();

  }
  onSubmit(pitcherForm: NgForm) {
    console.log(pitcherForm.value);
   if (!pitcherForm.value.$keyP) {
     // console.log( "Insert" );
    this.pitcherService.insertPitcher(pitcherForm.value);
   } else {
      // console.log("Update");
      this.pitcherService.updatePitcher(pitcherForm.value);
    }
    this.resetForm(pitcherForm);
}


  resetForm(pitcherForm?: NgForm) { if (pitcherForm != null)pitcherForm.reset();

  this.pitcherService.selectedPitcher = new Pitcher();

  }

}
