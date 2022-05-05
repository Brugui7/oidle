import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input-result',
  templateUrl: './input-result.component.html',
  styleUrls: [
    './input-result.component.scss',
    './input-result-small.component.scss',
  ]
})
export class InputResultComponent {
  @Input() emoji?: string;
  @Input() text?: string;
}
