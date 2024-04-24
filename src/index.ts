import { ActivityType } from "./tracking/activity-types.js";

// These are all emissions in kg CO2e per passenger-km
export const EMISSIONS_FACTORS = {
  // Non motorized transport
  [ActivityType.STATIONARY]: 0.0,
  [ActivityType.WALKING]: 0.0,
  [ActivityType.RUNNING]: 0.0,
  [ActivityType.CYCLING]: 0.0,

  // Motorized transport
  [ActivityType.CAR]: 0.169826,
  [ActivityType.TRAIN]: 0.035463,
  [ActivityType.TRAM]: 0.028603,
  [ActivityType.AIRPLANE]: 0.285,
  [ActivityType.BUS]: 0.10215,
  [ActivityType.FERRY]: 0.1,
  [ActivityType.METRO]: 0.027802,
  [ActivityType.SUBWAY]: 0.027802,
  [ActivityType.COMMUTER_TRAIN]: 0.035462,
  [ActivityType.FUNICULAR]: 0.028603,
  [ActivityType.GONDOLA_LIFT]: 0.0,
  [ActivityType.HEAVY_RAIL]: 0.035463,
  [ActivityType.HIGH_SPEED_TRAIN]: 0.035463,
  [ActivityType.INTERCITY_BUS]: 0.078322,
  [ActivityType.LONG_DISTANCE_TRAIN]: 0.035463,
  [ActivityType.METRO_RAIL]: 0.027802,
  [ActivityType.MONORAIL]: 0.027802,
  [ActivityType.TROLLEYBUS]: 0.10215,
  [ActivityType.SHARE_TAXI]: 0.148614,
  [ActivityType.RAIL]: 0.035462,
  [ActivityType.OTHER]: 0.0,

  [ActivityType.CABLE_CAR]: 0.028603,
  // Zero emissions for non-motorized transport
  [ActivityType.EV]: 0.054796,
};

export * from "./helpers/date.js";
export * from "./errors/drivn-error.js";
export * from "./tracking/activity-types.js";
export * from "./organization/subscription-info.js";
export * from "./routes/index.js";
export {
  getVehicleEmissionsKey,
  getEmissionsPerKilometerFromVehicle,
  getEmissionsPerKilometerFromKey,
} from "./vehicles/vehicle-and-emissions.js";

import * as ac from "./tracking/activity-types.js";

import * as office from "./organization/office.js";
import * as department from "./organization/department.js";
import * as org from "./organization/organization.js";

import * as express from "./express/express.js";

import * as address from "./tracking/address.js";
import * as location from "./tracking/location.js";
import * as notif from "./tracking/notification.js";
import * as trip from "./tracking/trip.js";
import * as report from "./tracking/report.js";

import * as user from "./user/user.js";
import * as creds from "./user/user-with-creds.js";
import * as token from "./user/user-with-token.js";

import * as vehicle from "./vehicles/vehicle.js";
import * as model from "./vehicles/vehicle-model.js";
import * as make from "./vehicles/vehicle-make.js";

import * as subscription from "./organization/subscription-info.js";

import * as login from "./props/log-in.js";
import * as create from "./props/create.js";

import * as team from "./props/team.js";
import * as sub from "./props/subscription.js";
import * as contact from "./props/contact.js";
import * as header from "./props/header.js";
import * as noauth from "./props/no-auth.js";
import * as subsidiary from "./organization/subsidiary.js";
import * as analytics from "./analytics/analytics.js";
import * as support from "./analytics/ticket.js";
import * as trip_summary from "./tracking/trip-summary.js";
import * as vehicle_and_emissions from "./vehicles/vehicle-and-emissions.js";

declare global {
  namespace Drivn {
    // Tracking Types
    type ActivityType = ac.ActivityType;
    type Address = address.Address;
    type Location = location.Location;
    type Notification = notif.Notification;
    type PastTrip = trip.PastTrip;
    type Trip = trip.Trip;
    type Segment = trip.Segment;
    type CurrentDrive = location.CurrentDrive;
    type LocationTimestamp = location.LocationTimestamp;
    type Report = report.Report;
    type TripCreate = location.LogRequestBody;

    // Organization Types
    type Organization = org.Organization;
    type Office = office.Office;
    type Subsidiary = subsidiary.Subsidiary;
    type Department = department.Department;

    // Express Types
    type Request<T = unknown> = express.Request<T>;
    type Response = express.Response;
    type Next = express.Next;
    type UnprotectedRequest<T = unknown> = express.UnprotectedRequest<T>;
    type UserRequest = express.UserRequest;

    // User Types
    type User = user.User;
    type UserWithCreds = creds.UserWithCreds;
    type UserWithToken = token.UserWithToken;

    // Vehicle Types
    /**
     * @deprecated User Make Or Model
     */
    type Vehicle = vehicle.Vehicle;
    type VehicleMake = make.VehicleMake;
    type VehicleModel = model.VehicleModel;
    type UserVehicle = model.UserVehicle;
    type VehicleEmissions = vehicle_and_emissions.VehicleTypes;
    type CarFuelTypes = vehicle_and_emissions.CarFuelTypes;
    type MotorbikeFuelTypes = vehicle_and_emissions.MotorbikeFuelTypes;
    type VehicleType = vehicle_and_emissions.VehicleSizes;
    type CarEmissions = vehicle_and_emissions.CarEmissions;
    type MotorbikeEmissions = vehicle_and_emissions.MotorbikeEmissions;
    type VehicleSizes = vehicle_and_emissions.VehicleSizes;
    type UserVehicleSelection = vehicle_and_emissions.UserVehicleSelection;

    // Props Types
    type TeamMember = team.TeamMember;
    type ContactValues = contact.ContactValues;
    type SubscriptionCellData = sub.SubscriptionCellData;
    type HeaderProps = header.HeaderProps;
    type NoAuthProps = noauth.NoAuthProps;
    type LoginValues = login.LoginValues;
    type ResetPasswordValues = login.ResetPasswordValues;
    type CreateOrganization = create.CreateOrganization;
    type OrganizationForCreate = create.OrganizationForCreate;
    type UserForCreate = create.UserForCreate;
    type UserForInvite = user.UserForInvite;

    // Subscription Info
    type SubscriptionInfo = subscription.SubscriptionInfo;
    type ValidSubscription = subscription.ValidSubscription;
    type InvalidSubscription = subscription.InvalidSubscription;
    type Invoice = subscription.Invoice;
    type SubscriptionStatus = subscription.SubscriptionStatus;

    // Analytics Types
    type Analytics = analytics.Analytics;
    type RecentDriveDate = analytics.RecentDriveDate;
    type ActivityTypeMetrics = analytics.ActivityTypeMetrics;

    // Support
    type SupportTicket = support.SupportTicket;
    type TicketMessage = support.TicketMessage;

    type TripSummary = trip_summary.TripSummary;

    type VehicleMakeResponse = { makes: Drivn.VehicleMake[]; total: number };
    type VehicleModelResponse = { models: Drivn.VehicleModel[]; total: number };

    // Request Types
    type OfficeResponse = { offices: Office[]; total: number };
    type DepartmentResponse = {
      departments: Department[];
      total: number;
    };
    type EmployeeResponse = {
      employees: User[];
      total: number;
    };
    type TripResponse = {
      trips: trip_summary.TripSummary[];
      total: number;
    };
    type AnalyticsResponse = {
      plottable_analytics: RecentDriveDate[];
      entity_analytics: Analytics;
    };
    type DepartmentCreate = Omit<Department, "id">;
    type DepartmentUpdate = Omit<Department, "id" | "employees">;
    type OfficeCreate = Omit<Office, "id" | "employees" | "orgId">;
    type OfficeUpdate = Omit<Office, "id" | "orgId" | "employees">;
    type ReportCreate = Omit<Report, "tripId" | "userId" | "id" | "date">;
    type UserCreate = Omit<UserWithCreds, "timeAdded" | "uid">;
    type UserUpdate = Partial<Omit<User, "uid" | "timeAdded">>;
    type ToggleAnonymous = {
      anonymous: boolean;
    };
    type OrganizationUpdate = Partial<OrganizationForCreate>;
  }
}
