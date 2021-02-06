import { Component, Input, OnInit } from '@angular/core';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

@Component({
  selector: 'app-schedule-table',
  templateUrl: './schedule-table.component.html',
  styleUrls: ['./schedule-table.component.css'],
  animations: [
    trigger('detailExpand', [
      state('expanded', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition(
        'expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')
      ),
    ]),
  ],
})
export class ScheduleTableComponent implements OnInit {
  @Input()
  dataSource: [];
  @Input()
  columnsToDisplay: String[];
  expandedElement: null;
  constructor() {}

  ngOnInit(): void {}
}
