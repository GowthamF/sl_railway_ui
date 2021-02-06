import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Constants } from './constants';
import {
  SchedulePost,
  ScheduleResponse,
} from '../interfaces/schedule.interface';

@Injectable({
  providedIn: 'root',
})
export class ScheduleService {
  hasRequestedForSearch: boolean;
  http: HttpClient;

  constructor(http: HttpClient) {
    this.http = http;
  }

  getSchedule(stationData: SchedulePost) {
    return this.http.post<ScheduleResponse>(
      Constants.baseUrl + '/getSchedule',
      stationData
    );
  }
}
