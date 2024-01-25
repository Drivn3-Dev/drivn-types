import { ActivityType } from "../index.js";

export interface Analytics {
  // The Analytics Associated Id (User Id Or Office Id Or Department Id)
  id: string;

  // The Total Number Of Trips
  totalTrips: number;

  // The Total Emissions
  totalEmissions: number;

  // The Total Distance
  totalDistance: number;

  // All The Activity Types
  activityTypes: ActivityTypeMetrics[];

  // Recent Trip Analytics Ids
  recentTripAnalyticsIds: string[];

  // Past Trip Analytics Ids (Not In Recent Trip Ids)
  pastTripAnalyticsIds: string[];
}

export interface ActivityTypeMetrics {
  // The Activity Type
  activityType: ActivityType;

  // Activity Type Emissions
  emissions: number;

  // Activity Type Distance
  distance: number;

  // Activity Type Log Count
  count: number;
}

type RecentDrive = Omit<
  Analytics,
  | "pastTripAnalyticsIds"
  | "recentTripAnalyticsIds"
  | "totalTrips"
>;

export interface RecentDriveDate extends RecentDrive {
  // The Date Of The Drive
  date: Date;

  // The Trips In The Analytics Date
  tripIds: string[];

  // The Entity Id For The Drive Date
  entityId: string;
}
