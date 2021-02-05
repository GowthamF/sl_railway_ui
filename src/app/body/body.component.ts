import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'],
})
export class BodyComponent implements OnInit {
  startStationCtrl = new FormControl('', Validators.required);
  endStationCtrl = new FormControl('', Validators.required);
  startTimeCtrl = new FormControl();
  endTimieCtrl = new FormControl();

  selection = ['A', 'B'];

  constructor() {}

  ngOnInit(): void {}
}
