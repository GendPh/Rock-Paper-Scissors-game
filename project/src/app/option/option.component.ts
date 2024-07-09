import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-option',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './option.component.html',
  styles: ``
})
export class OptionComponent {
  @Input() option: string = 'paper';
}
