import { TripInfoShort } from "../tracking/trip-times.js";

export interface AllowanceOverview {
  // The Overview Unique Id
  id: string;

  // The User Id for the user who created the report
  userId: string;

  // The Date When The Overview was Created
  createdAt: Date;

  // The Start Date for the Overview
  startDate: Date;

  // The End Date for the Overview
  endDate: Date;

  // The Trip Ids in the overview
  tripIds: string[];

  // The Distance Driven in Business Context in km
  businessMilage?: number;

  // The Distance Driven in Private Context in km
  privateMilage?: number;

  // The Commute Distance in km
  commuteMilage?: number;

  // The Emissions in Business Context in kg CO2
  businessEmissions?: number;

  // The Emissions in Private Context in kg CO2
  privateEmissions?: number;

  // The Commute Emissions in kg CO2
  commuteEmissions?: number;

  // The amount of reimbursement the user is entitled to
  reimbursement?: number;
}

export interface AllowanceOverviewWithTripInfos extends AllowanceOverview {
  tripInfos: TripInfoShort[];
}