import { Component, Input, OnInit } from '@angular/core';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { ScheduleResponse } from '../interfaces/schedule.interface';

@Component({
  selector: 'app-schedule-table',
  templateUrl: './schedule-table.component.html',
  styleUrls: ['./schedule-table.component.css'],
  animations: [
    trigger('detailExpand', [
      state('expanded', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition(
        'collapsed <=> expanded',
        animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')
      ),
    ]),
  ],
})
export class ScheduleTableComponent implements OnInit {
  @Input()
  scheduleData: ScheduleResponse;

  expandedElement: null;
  columnsToDisplay = [];
  columns = [];
  dataSource = [];
  constructor() {}

  ngOnInit(): void {
    var columnHeaders = [...this.scheduleData.schedules];
    this.dataSource = this.scheduleData.schedules;
    this.columnsToDisplay = this.scheduleData.headers;
    var firstElement = columnHeaders.shift();
    this.columns = Object.keys(firstElement).slice(0, 8);
  }
}
