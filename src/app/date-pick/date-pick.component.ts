import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-pick',
  templateUrl: './date-pick.component.html',
  styleUrls: ['./date-pick.component.css'],
})
export class DatePickComponent implements OnInit {
  minDate: Date;

  constructor() {
    const currentDate = new Date();
    this.minDate = currentDate;
  }

  ngOnInit(): void {}
}
