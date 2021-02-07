import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import {
  SchedulePost,
  ScheduleResponse,
} from '../interfaces/schedule.interface';
import { Stations, Times } from '../interfaces/stations.interface';
import { ScheduleService } from '../services/schedule.service';
import { StationsService } from '../services/stations.service';

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
  searchDateCtrl = new FormControl();

  trainSchedule: ScheduleResponse;

  errorMessage: String = 'Please Select a Station';

  stationsData: Stations[] = [];
  timeData: Times[] = [];

  datePipe: DatePipe;

  stationsService: StationsService;
  scheduleService: ScheduleService;

  selection = ['A', 'B'];

  constructor(
    stationsService: StationsService,
    scheduleService: ScheduleService,
    datepipe: DatePipe
  ) {
    this.stationsService = stationsService;
    this.scheduleService = scheduleService;
    this.datePipe = datepipe;
  }

  ngOnInit(): void {
    this.stationsService.stations.subscribe((stations) => {
      this.stationsData = stations;
    });
    this.stationsService.times.subscribe((times) => {
      this.timeData = times;
    });
  }

  searchTrains(): void {
    if (!this.startStationCtrl.invalid || !this.endStationCtrl.invalid) {
      if (this.startStationCtrl.value === this.endStationCtrl.value) {
        this.startStationCtrl.setErrors({ notUnique: true });
        this.endStationCtrl.setErrors({ notUnique: true });
        this.errorMessage = 'Both Start Station and End Station cannot be same';
      }

      var schedulePost: SchedulePost = {
        selectedLocale: 'en',
        startStationID: this.startStationCtrl.value,
        endStationID: this.endStationCtrl.value,
        startTime:
          this.startTimeCtrl.value === null ? -1 : this.startTimeCtrl.value,
        endTime:
          this.endTimieCtrl.value === null ? -1 : this.endTimieCtrl.value,
        searchDate:
          this.searchDateCtrl.value === null
            ? ''
            : this.datePipe.transform(this.searchDateCtrl.value, 'dd/MM/yyyy'),
      };

      // var schedulePost: SchedulePost = {
      //   selectedLocale: 'en',
      //   startStationID: 115,
      //   endStationID: 61,
      //   startTime: '-1',
      //   endTime: '-1',
      //   searchDate: '07/02/2021',
      // };
      this.scheduleService.hasRequestedForSearch = false;
      this.scheduleService.getSchedule(schedulePost).subscribe((response) => {
        this.trainSchedule = response;
        // this.trainSchedule.headers
        // console.log(this.trainSchedule.schedules);
        this.scheduleService.hasRequestedForSearch = true;
      });
    } else {
      this.startStationCtrl.markAsTouched();
      this.endStationCtrl.markAsTouched();
    }
  }

  clearSchedule(): void {
    this.scheduleService.hasRequestedForSearch = false;
    this.startTimeCtrl.reset();
    this.startStationCtrl.reset();
    this.endStationCtrl.reset();
    this.endTimieCtrl.reset();
    this.searchDateCtrl.reset();
    this.errorMessage = 'Please Select a Station';
  }
}
