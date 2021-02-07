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
        //This is temporary. Once Connected Trains API implemented, this filteration will be removed
        var filteredStation = data.stations.filter((val) => {
          return (
            val.id === 23 ||
            val.id === 24 ||
            val.id === 44 ||
            val.id === 61 ||
            val.id === 54 ||
            val.id === 57 ||
            val.id === 68 ||
            val.id === 75 ||
            val.id === 96 ||
            val.id === 86 ||
            val.id === 400 ||
            val.id === 148 ||
            val.id === 147 ||
            val.id === 115 ||
            val.id === 142 ||
            val.id === 187 ||
            val.id === 184 ||
            val.id === 220 ||
            val.id === 235 ||
            val.id === 246 ||
            val.id === 289
          );
        });
        // console.log(dd);
        this.stations.next(filteredStation);
        this.times.next(data.times);
        this.isLoading = false;
      });
  }
}
