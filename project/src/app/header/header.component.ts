import { Component, Input, OnInit } from '@angular/core';
import { GameService } from '../service/game.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styles: ``
})
export class HeaderComponent implements OnInit {
  @Input() public gameName: string = 'rock-paper-scissors';

  public points: string = "0";

  constructor(private gameService: GameService) { }

  ngOnInit(): void {
    if (this.gameName === 'rock-paper-scissors') {
      this.points = this.gameService.getRockPaperScissorsGamePoints() ?? "0";
    } else if (this.gameName === 'lizard-spock') {
      this.points = this.gameService.getLizardSpock() ?? "0";
    }
  }
}
