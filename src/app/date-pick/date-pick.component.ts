import { DatePipe } from '@angular/common';
import { Component, Injectable, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import {
  DateAdapter,
  MatDateFormats,
  MAT_DATE_FORMATS,
  NativeDateAdapter,
} from '@angular/material/core';

@Injectable()
export class AppDateAdapter extends NativeDateAdapter {
  format(date: Date, displayFormat: Object): string {
    // if (displayFormat === 'input') {
    //   let day: string = date.getDate().toString();
    //   day = +day < 10 ? '0' + day : day;
    //   let month: string = (date.getMonth() + 1).toString();
    //   month = +month < 10 ? '0' + month : month;
    //   let year = date.getFullYear();
    //   return `${day}-${month}-${year}`;
    // }
    return date.toDateString();
  }
}

export const APP_DATE_FORMATS: MatDateFormats = {
  parse: {
    dateInput: { month: 'short', year: 'numeric', day: 'numeric' },
  },
  display: {
    dateInput: 'input',
    monthYearLabel: { year: 'numeric', month: 'numeric' },
    dateA11yLabel: { year: 'numeric', month: 'long', day: 'numeric' },
    monthYearA11yLabel: { year: 'numeric', month: 'long' },
  },
};
@Component({
  selector: 'app-date-pick',
  templateUrl: './date-pick.component.html',
  styleUrls: ['./date-pick.component.css'],
  providers: [
    { provide: DateAdapter, useClass: AppDateAdapter },
    { provide: MAT_DATE_FORMATS, useValue: APP_DATE_FORMATS },
  ],
})
export class DatePickComponent implements OnInit {
  @Input()
  stateCtrl: FormControl;

  minDate: Date;
  dateValue: Date;

  constructor() {
    const currentDate = new Date();
    this.minDate = currentDate;
  }

  ngOnInit(): void {}
}
