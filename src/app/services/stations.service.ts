import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  StationAndTime,
  Stations,
  Times,
} from '../interfaces/stations.interface';
import { Constants } from './constants';
import { map, catchError } from 'rxjs/operators';
import { BehaviorSubject, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StationsService {
  http: HttpClient;
  stations: BehaviorSubject<Stations[]> = new BehaviorSubject<Stations[]>([]);
  times: BehaviorSubject<Times[]> = new BehaviorSubject<Times[]>([]);
  isLoading: boolean;

  constructor(http: HttpClient) {
    this.http = http;
  }

  getStationsData() {
    this.isLoading = true;
    this.http
      .get<StationAndTime>(Constants.baseUrl + '/getStations')
      .subscribe((data) => {
        data.stations.splice(0, 1);
        data.times.splice(0, 1);
        this.stations.next(data.stations);
        this.times.next(data.times);
        this.isLoading = false;
      });
  }
}
