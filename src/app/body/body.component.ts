import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Stations, Times } from '../interfaces/stations.interface';
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

  stationsData: Stations[] = [];
  timeData: Times[] = [];

  stationsService: StationsService;

  selection = ['A', 'B'];

  constructor(stationsService: StationsService) {
    this.stationsService = stationsService;
  }

  ngOnInit(): void {
    this.stationsService.stations.subscribe((stations) => {
      this.stationsData = stations;
    });
    this.stationsService.times.subscribe((times) => {
      this.timeData = times;
    });
  }
}
