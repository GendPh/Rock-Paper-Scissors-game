import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { GameService } from '../service/game.service';

@Component({
  selector: 'app-option',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './option.component.html',
  styles: ``
})
export class OptionComponent {
  @Input() option: string[] = ['paper'];

  constructor(private gameService: GameService) { }

  playOption() {
    this.gameService.playGameRockPaperScissors(this.option[0]);
  }

}
