import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing/app-routing.module';


import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';



// Firebase

import { AngularFireModule  } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment  } from '../environments/environment';

// Components

import { PlayersComponent } from './components/players/players.component';
import { PlayerListComponent } from './components/players/player-list/player-list.component';
import { PlayerComponent } from './components/players/player/player.component';

// Services

import { PlayerService } from './services/player.service';
import { PitchersComponent } from './components/pitchers/pitchers.component';
import { PitcherComponent } from './components/pitchers/pitcher/pitcher.component';
import { PitcherListComponent } from './components/pitchers/pitcher-list/pitcher-list.component';
// import { DashboardComponent } from './dashboard/dashboard.component';
// import { PSeasonComponent } from './p-season/p-season.component';


@NgModule({
  declarations: [
    AppComponent,
    // PlayersComponent,
    PlayerListComponent,
    PlayerComponent,
    PitchersComponent,
    PitcherComponent,
    PitcherListComponent,
    routingComponents
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    FormsModule,
    ToastrModule.forRoot(),
    CommonModule,
    BrowserAnimationsModule,
    AppRoutingModule
    

  ],
  providers: [
    PlayerService
  ],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
