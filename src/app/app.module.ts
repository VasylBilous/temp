import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './app-header/app-header.component';
import { PlayerListComponent } from './player-list/player-list.component';
import { TeamListComponent } from './team-list/team-list.component';
import { TeamEditComponent } from './team-list/team-edit/team-edit.component';
import { PlayerDetailsComponent } from './player-list/player-details/player-details.component';
import { PlayerEditComponent } from './player-list/player-edit/player-edit.component';
import { TeamDetailsComponent } from './team-list/team-details/team-details.component';
import { AboutComponent } from './about/about.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PlayerListComponent,
    TeamListComponent,
    TeamEditComponent,
    PlayerDetailsComponent,
    PlayerEditComponent,
    TeamDetailsComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
