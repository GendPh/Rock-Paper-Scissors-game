import { Component } from '@angular/core';
import { OptionComponent } from '../option/option.component';
import { GameService } from '../service/game.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-playing',
  standalone: true,
  imports: [OptionComponent, CommonModule],
  templateUrl: './playing.component.html',
  styles: ``
})
export class PlayingComponent {
  public playerPicking: string = 'hold';
  public housePicking: string = 'hold';
  public gameEnd: boolean = false;
  public winner: string = '';

  constructor(private gameService: GameService) {
    this.gameService.playerChoiceSignal.subscribe((playerChoice) => {
      this.playerPicking = playerChoice;
    });
    this.gameService.houseChoiceSignal.subscribe((houseChoice) => {
      this.housePicking = houseChoice;
    });
    this.gameService.gameEndSignal.subscribe((gameEnd) => {
      this.gameEnd = gameEnd;
    });
    this.gameService.winnerSignal.subscribe((winner) => {
      this.winner = winner;
    });
  }

  restartGame() {
    this.gameService.restartGame();
  }
}
