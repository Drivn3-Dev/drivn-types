export interface TripTimes {
  /** Unique identifier for the trip */
  id: string;

  /** Start date and time of the last activity in the trip */
  startDate: Date;

  /** End date and time of the last activity in the trip */
  endDate: Date;

  /** Boolean stating if the trip has been confirmed */
  correct: boolean;

  /** Unique identifier for the office (or special trip type) */
  officeId: string;

  /** Whether the trip is to the office or not. */
  toOffice: boolean;

  /** Array of distinct activity types involved in the trip */
  activityTypes?: string[];

  /** Boolean stating if the trip was private */
  private?: boolean;

  /** Boolean stating if the trip is a "dummy" duplicate */
  duplicate?: boolean;
}
