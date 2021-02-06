export interface Stations {
  id: Number;
  value: String;
}

export interface Times {
  id: String;
  value: String;
}

export interface StationAndTime {
  stations: Stations[];
  times: Times[];
}
