import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-clear-button',
  templateUrl: './clear-button.component.html',
  styleUrls: ['./clear-button.component.css'],
})
export class ClearButtonComponent implements OnInit {
  @Output()
  clearSchedule: EventEmitter<void> = new EventEmitter<void>();

  constructor() {}

  ngOnInit(): void {}

  clear(): void {
    this.clearSchedule.emit();
  }
}
