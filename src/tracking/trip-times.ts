export interface TripInfoShort {
  /** Unique identifier for the trip */
  id: string;

  /** Start date and time of the last activity in the trip */
  startDate: Date;

  /** End date and time of the last activity in the trip */
  endDate: Date;

  /** Boolean stating if the trip has been confirmed */
  correct?: boolean;

  /** Unique identifier for the office (or special trip type) */
  officeId?: string;

  /** Array of distinct activity types involved in the trip */
  activityTypes?: Record<Drivn.ActivityType, Record<string, number>>;

  /** The purpose of the trip */
  purpose: number;

  /** The distance of the trip */
  distance: number;

  /** The total emissions of the trip */
  emissions: number;

  startAddr?: Drivn.Address;
  endAddr?: Drivn.Address;
}
