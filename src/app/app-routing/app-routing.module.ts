import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PSeasonComponent } from '../p-season/p-season.component';
import { PlayersComponent } from '../../app/components/players/players.component';


const routes: Routes = [
  {
      path: 'players',
      component: PlayersComponent
    },
      { path: 'p-season',
      component: PSeasonComponent
  },
];





@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
     ],
  exports: [
    RouterModule
],
  declarations: []
})
export class AppRoutingModule { }

export const routingComponents= [PlayersComponent, PSeasonComponent]
