export interface Stations {
  stationId: Number;
  stationName: String;
}

export interface Times {
  timeId: String;
  timeValue: String;
}

export interface StationAndTime {
  stations: Stations[];
  times: Times[];
}
