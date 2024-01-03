import { ActivityType } from "../index.js";

export interface Analytics {
  // The Analytics Associated Id (User Id Or Office Id Or Department Id)
  associatedId: string;

  // The Total Number Of Trips
  totalTrips: number;

  // The Total Emissions
  totalEmissions: number;

  // The Total Distance
  totalDistance: number;

  // Average Distance
  avgDistance: number;

  // Average Emissions
  avgEmissions: number;

  // All The Activity Types
  activityTypes: ActivityTypeMetrics[];

  // Recent Trip Ids
  recentTripIds: string[];

  // Past Trip Ids (Not In Recent Trip Ids)
  pastTripIds: string[];
}

export interface ActivityTypeMetrics {
  // The Activity Type
  type: ActivityType;

  // Activity Type Emissions
  emissions: number;

  // Activity Type Distance
  distance: number;

  // Activity Type Log Count
  count: number;
}

export interface RececentDrive extends Analytics {
  // The Date Of The Drive
  date: Date;
}
