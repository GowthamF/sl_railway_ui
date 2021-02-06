export interface SchedulePost {
  selectedLocale: String;
  startStationID: Number;
  endStationID: Number;
  startTime: String;
  endTime: String;
  searchDate: String;
}

export interface ScheduleResponse {
  directTrains: String;
  headerText: String;
  totalAvailableTrains: String;
  headers: String[];
  schedules: TrainSchedule[];
  ticketDetails: TicketDetails;
}

export interface TrainSchedule {
  arrivalTime: String;
  availableClasses: String;
  depatureTime: String;
  destination: Destination;
  endStation: EndStation;
  frequency: String;
  name: String;
  startStation: String;
  trainNo: String;
  trainsEndAt: String;
  type: String;
}

export interface Destination {
  destinationStation: String;
  destinationStationTime: String;
}

export interface EndStation {
  endStation: String;
  endStationTime: String;
}

export interface TicketDetails {
  ticketPrices: String[];
  totalDistance: String;
}
