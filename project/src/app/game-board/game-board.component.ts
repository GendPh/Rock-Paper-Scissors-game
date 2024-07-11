import { Component, Input } from '@angular/core';
import { OptionComponent } from '../option/option.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-game-board',
  standalone: true,
  imports: [OptionComponent, CommonModule],
  templateUrl: './game-board.component.html',
  styles: ``
})
export class GameBoardComponent {
  @Input() game: string = 'rock-paper-scissors';
}
