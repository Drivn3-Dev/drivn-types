export interface TripSummary {
  /** Unique identifier for the trip */
  id: string;

  /** Total emissions for the trip calculated by summing emissions of all individual activities */
  emissions: number;

  /** Total distance covered in the trip calculated by summing distances of all individual activities */
  distance: number;

  /** End date and time of the last activity in the trip */
  endDate: Date;

  /** Array of distinct activity types involved in the trip */
  activityTypes: string[];

  /** Boolean stating if the trip has been confirmed */
  correct: boolean;
}
