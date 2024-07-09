import { Component, Input } from '@angular/core';
import { OptionComponent } from '../option/option.component';

@Component({
  selector: 'app-game-board',
  standalone: true,
  imports: [OptionComponent],
  templateUrl: './game-board.component.html',
  styles: ``
})
export class GameBoardComponent {
  @Input() game: string = 'rock-paper-scissors';
}
