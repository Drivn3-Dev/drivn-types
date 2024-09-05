import { ActivityType } from "./activity-types.js";
import { LocationTimestamp } from "./location.js";

export interface Segment {
  // The ID Of The
  // The Distance Of The Segment, In km
  distance?: number;

  // The Emissions Of The Segment, In g/km
  emissions?: number;

  // The Activity Type Of The Segment
  activityType?: ActivityType;

  // Start The Location Longitude
  startLong: number;

  // Start The Location Latitude
  startLat: number;

  // Start The Location Inaccuracy
  startInaccuracy?: number;

  // Start Locationtimestamp
  startLocationTimestamp?: LocationTimestamp;

  // Start The Time When The Distance Was Logged
  startTime: string;

  // The Location Longitude
  endLong: number;

  // The Location Latitude
  endLat: number;

  // The Location Inaccuracy
  endInaccuracy?: number;

  // The Time When The Distance Was Logged
  endTime: string;

  // End Locationtimestamp
  endLocationTimestamp?: LocationTimestamp;

  // The Speed, in km/h
  speed?: number;
}

// List Of Segments
export type Trip = Segment[];

export interface PastTrip {
  // The Trip ID
  id: string;

  // The Trip
  trip: Trip;

  /**
   * @deprecated The Vehicle Used In The Trip. Use preferredVehicleId Instead
   */
  vehicleId?: string;

  // The id of the preffered vehicle for the trip
  preferredVehicleId?: string;

  // The Office ID
  officeId: string;

  // The Trip Name
  name: string;

  // Whether the trip is to the office or not
  toOffice: boolean;

  // The Reported Trip Id (Undefined If Not Reported)
  reported?: string;

  // Is The Trip Marked Correct
  correct: boolean;

  // The User Id Of The Trip
  userId: string;

  // The Creation Date Of The Trip
  createdAt: Date;

  // The Analytics Id For The Trip
  analyticsIds: string[];

  // The Version Of The PastTrip Type
  version?: number;

  // The Device Model (e.g. iPhone 12 Pro Max, Samsung Galaxy S21 Ultra)
  deviceModel?: string;

  // Optional The OS version of the device (e.g. 17.5.1)
  osVersion?: string;

  // Optional Platform (e.g. iOS, Android)
  platform?: string;

  // Optional boolean stating if the trip was private
  private?: boolean;
}
