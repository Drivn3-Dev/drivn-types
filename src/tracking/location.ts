// A Singleton Location Object Instance
export interface Location {
  // The Location Longitude
  lng: number;

  // The Location Latitude
  lat: number;

  // The accuracy of the location in meters, if available
  inaccuracy?: number;
}

export interface LocationTimestamp extends Location {
  time: string;

  /**
   * The reported device motion activity.
   *
   * | Activity Name  |
   * |----------------|
   * | `still`        |
   * | `walking`      |
   * | `on_foot`      |
   * | `running`      |
   * | `on_bicycle`   |
   * | `in_vehicle`   |
   * | `unknown`      |
   */
  motionActivity?: string;
  /**
   * The confidence of the reported device motion activity.
   */
  motionActivityConfidence?: number;

  /**
   * The altitude of this location in meters above the WGS84 reference ellipsoid.
   */
  altitude?: number;

  // The altitude accuracy of the location in meters, if available
  altitudeAccuracy?: number;
}

export type CurrentDrive = LocationTimestamp[];

export interface LogRequestBody {
  // The Current Date Time
  locations: Drivn.CurrentDrive;

  // Optional Trip Id
  tripId?: string;

  // The Device Model (e.g. iPhone 12 Pro Max, Samsung Galaxy S21 Ultra)
  deviceModel?: string;

  // Optional The OS version of the device (e.g. 17.5.1)
  osVersion?: string;

  // Optional Platform (e.g. iOS, Android)
  platform?: string;

  // Optional If Non - Work Related Trip
  private?: boolean;

  // The Office ID involved in the trip (if applicable)
  officeId?: string;
}
