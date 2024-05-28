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
}

export type CurrentDrive = LocationTimestamp[];

export interface LogRequestBody {
  // The Current Date Time
  locations: Drivn.CurrentDrive;
}
