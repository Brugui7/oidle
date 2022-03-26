import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-result',
  templateUrl: './input-result.component.html',
  styleUrls: ['./input-result.component.scss']
})
export class InputResultComponent implements OnInit {
  @Input() emoji?: string;
  @Input() text?: string;
  constructor() { }

  ngOnInit(): void {
  }

}
