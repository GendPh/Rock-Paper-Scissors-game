import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { GameBoardComponent } from '../game-board/game-board.component';

@Component({
  selector: 'app-rock-paper-scissors',
  standalone: true,
  imports: [HeaderComponent, GameBoardComponent],
  templateUrl: './rock-paper-scissors.component.html',
  styles: ``
})
export class RockPaperScissorsComponent {

}
