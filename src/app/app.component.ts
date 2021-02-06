import { Component, OnInit } from '@angular/core';
import { StationsService } from './services/stations.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  stationService: StationsService;
  constructor(stationService: StationsService) {
    this.stationService = stationService;
  }
  ngOnInit(): void {
    this.stationService.getStationsData();
  }
}
