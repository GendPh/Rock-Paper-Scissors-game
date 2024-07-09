import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './game.component.html',
  styles: ``
})
export class GameComponent {
}
