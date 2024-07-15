export interface TripInfo {
  // The Trip ID
  id: string;

  // The id of the preffered vehicle for the trip
  preferredVehicleId?: string;

  // The emissions per kilometer for car stretches
  carEmissionsPerKilometer?: number;

  // If stretches deemed as bike were ebike stretches
  usedEbike?: boolean;

  // The User Id Of The Trip
  userId: string;

  // The Office ID if it was not a private trip
  officeId?: string;

  // The Date The Trip Was Recorded
  tripDate: Date;

  // Is The Trip Marked Correct
  correct: boolean;

  // The Device Model (e.g. iPhone 12 Pro Max, Samsung Galaxy S21 Ultra)
  deviceModel?: string;

  // Optional The OS version of the device (e.g. 17.5.1)
  osVersion?: string;

  // Optional Platform (e.g. iOS, Android)
  platform?: string;

  // Optional boolean stating if the trip was private
  isPrivate?: boolean;

  // Optional when the user left the office
  officeCheckInTime?: string;

  // Optional when the user returned to the office
  officeCheckOutTime?: string;
}

export interface ActivityIndex {
  // Which index in the trip this activityType ends
  endIndex: number;

  // The activityType of the activity
  activityType: Drivn.ActivityType;

  // The distance of the activity in km
  distanceKm: number;

  // The Co2 emissions of the activity in kg
  emissionsKg: number;
}

export interface Triplocation {
  // The time the location was recorded
  time: Date;

  // The latitude of the location
  lat: number;

  // The longitude of the location
  lng: number;

  // The accuracy of the location in meters, if available
  inaccuracy?: number;

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
   * This might be deleted in the future.
   */
  motionActivityConfidence?: number;

  /**
   * The altitude of this location in meters above the WGS84 reference ellipsoid.
   */
  altitude?: number;

  // The altitude accuracy of the location in meters, if available
  altitudeAccuracy?: number;
}

export interface EntireTrip {
  tripInfo: TripInfo;
  activityIndices: ActivityIndex[];
  locations: Triplocation[];
}

export interface CreateTripRequestBody {
  // The recorded locations of the trip
  locations: Triplocation[];
  // The id generated for the trip by the client
  tripId?: string;
  // Device info
  deviceModel?: string;
  osVersion?: string;
  platform?: string;

  // If the trip was private
  isPrivate?: boolean;
  officeCheckInTime?: string;
  officeCheckOutTime?: string;

  // The office id if it was not a private trip
  officeId?: string;
}
