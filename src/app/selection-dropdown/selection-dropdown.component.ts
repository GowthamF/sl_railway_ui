import { Component, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-selection-dropdown',
  templateUrl: './selection-dropdown.component.html',
  styleUrls: ['./selection-dropdown.component.css'],
})
export class SelectDropdownComponent implements OnInit {
  @Input()
  labelName: String;
  @Input()
  selectionOptions: [];
  @Input()
  isStartStation: boolean;
  @Input()
  stateCtrl: FormControl;
  @Input()
  errorMessage: String;
  @Input()
  isRequired: boolean;

  // @Output()
  // selectionChange;

  constructor() {}

  ngOnInit(): void {}
}
