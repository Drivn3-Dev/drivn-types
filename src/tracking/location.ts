// A Singleton Location Object Instance
export interface Location {
  // The Location Longitude
  lng: number;

  // The Location Latitude
  lat: number;

  // The accuracy of the location in meters, if available
  accuracy?: number;
}

export interface LocationTimestamp extends Location {
  time: string;
}

export type CurrentDrive = LocationTimestamp[];

export interface LogRequestBody {
  // The Current Date Time
  locations: Drivn.CurrentDrive;
}
