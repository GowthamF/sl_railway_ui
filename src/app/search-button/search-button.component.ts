import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-button',
  templateUrl: './search-button.component.html',
  styleUrls: ['./search-button.component.css'],
})
export class SearchButtonComponent implements OnInit {
  @Output()
  searchAction: EventEmitter<void> = new EventEmitter<void>();

  constructor() {}

  ngOnInit(): void {}

  searchClick(): void {
    this.searchAction.emit();
  }
}
