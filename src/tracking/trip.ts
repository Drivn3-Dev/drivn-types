import { ActivityType } from "./activity-types.js";

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

  // Start The Time When The Distance Was Logged
  startTime: string;

  // The Location Longitude
  endLong: number;

  // The Location Latitude
  endLat: number;

  // The Time When The Distance Was Logged
  endTime: string;

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

  // The Vehicle Used In The Trip
  vehicleId?: string;

  // The Office ID
  officeId?: string;

  // The Trip Name
  name: string;

  // Has The Trip Been Reported
  reported: boolean;

  // Is The Trip Marked Correct
  correct: boolean;

  // The User Id Of The Trip
  userId: string;

  // The Creation Date Of The Trip
  createdAt: Date;

  // The Analytics Id For The Trip
  analyticsId: string;
}
