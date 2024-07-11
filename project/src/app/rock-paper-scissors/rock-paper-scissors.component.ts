import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { GameBoardComponent } from '../game-board/game-board.component';
import { PlayingComponent } from '../playing/playing.component';
import { GameService } from '../service/game.service';
import { RouterLink } from '@angular/router';
import { RulesService } from '../service/rules.service';

@Component({
  selector: 'app-rock-paper-scissors',
  standalone: true,
  imports: [RouterLink, HeaderComponent, GameBoardComponent, PlayingComponent],
  templateUrl: './rock-paper-scissors.component.html',
  styles: ``
})
export class RockPaperScissorsComponent implements OnInit {

  public playing: boolean = false;

  constructor(private gameService: GameService, public rulesService: RulesService) {
    this.gameService.getRockPaperScissorsGamePoints();

    this.gameService.playingSignal.subscribe((playing) => {
      this.playing = playing;
    });

  }
  ngOnInit(): void {
    this.gameService.setGameMode('normal');
  }

  resetGame(): void {
    this.gameService.restartGame();
  }
}
