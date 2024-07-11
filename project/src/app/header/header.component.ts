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
export class HeaderComponent {
  @Input() public gameName: string = 'rock-paper-scissors';

  public points: string = "0";

  constructor(private gameService: GameService) {
    this.gameService.pointsSignal.subscribe((points) => {
      this.points = points;
    });
  }
}
