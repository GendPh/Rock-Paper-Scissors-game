import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { GameService } from '../service/game.service';
import { RouterLink } from '@angular/router';
import { GameBoardComponent } from '../game-board/game-board.component';
import { PlayingComponent } from '../playing/playing.component';
import { RulesService } from '../service/rules.service';

@Component({
  selector: 'app-lizard-spock',
  standalone: true,
  imports: [RouterLink, HeaderComponent, GameBoardComponent, PlayingComponent],
  templateUrl: './lizard-spock.component.html',
  styles: ``
})
export class LizardSpockComponent implements OnInit {
  public playing: boolean = false;

  constructor(private gameService: GameService, public rulesService: RulesService) {
    this.gameService.playingSignal.subscribe((playing) => {
      this.playing = playing;
    });
    this.gameService.getLizardSpockPoints();
  }

  ngOnInit(): void {
    this.gameService.setGameMode('bonus');
  }

  resetGame(): void {
    this.gameService.restartGame();
  }
}
