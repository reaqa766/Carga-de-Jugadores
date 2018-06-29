import { Component, OnInit } from '@angular/core';

// Service
import { PitcherseService } from '../../services/pitcherse.service';


import { NgForm } from '@angular/forms';

// Player Class
import { Pitcher } from '../../models/pitcher';




@Component({
  selector: 'app-pitcherse',
  templateUrl: './pitcherse.component.html',
  styleUrls: ['./pitcherse.component.css']
})
export class PitcherseComponent implements OnInit {

  constructor(private pitcherseService: PitcherseService) { }

  ngOnInit() {
    this.pitcherseService.getPitchers();
    this.resetForm();

  }
  onSubmit(pitcherForm: NgForm) {
    console.log(pitcherForm.value);
   if (!pitcherForm.value.$keyP) {
     // console.log( "Insert" );
    this.pitcherseService.insertPitcher(pitcherForm.value);
   } else {
      // console.log("Update");
      this.pitcherseService.updatePitcher(pitcherForm.value);
    }
    this.resetForm(pitcherForm);
}


  resetForm(pitcherForm?: NgForm) { if (pitcherForm != null)pitcherForm.reset();

  this.pitcherseService.selectedPitcher = new Pitcher();

  }

}
