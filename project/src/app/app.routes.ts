import { Routes } from '@angular/router';
import { GameComponent } from './game/game.component';
import { RockPaperScissorsComponent } from './rock-paper-scissors/rock-paper-scissors.component';
import { LizardSpockComponent } from './lizard-spock/lizard-spock.component';

export const routes: Routes = [
  {
    path: '', component: GameComponent,
  },
  {
    path: 'rock-paper-scissors', component: RockPaperScissorsComponent
  },
  {
    path: 'lizard-spock', component: LizardSpockComponent
  }
];
