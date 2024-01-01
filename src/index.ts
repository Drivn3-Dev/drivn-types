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

export * from "./errors/drivn-error.js";
export * from "./tracking/activity-types.js";

export * from "./organization/office.js";
export * from "./organization/department.js";
export * from "./organization/organization.js";

export * from "./express/express.js";

export * from "./tracking/address.js";
export * from "./tracking/location.js";
export * from "./tracking/notification.js";
export * from "./tracking/trip.js";

export * from "./user/user.js";
export * from "./user/user-with-creds.js";
export * from "./user/user-with-token.js";

export * from "./vehicles/vehicle.js";
export * from "./vehicles/vehicle-model.js";
export * from "./vehicles/vehicle-make.js";

export * from "./organization/subscription-info.js";

export * from "./props/log-in.js";
export * from "./props/create.js";

export * from "./props/team.js";
export * from "./props/subscription.js";
export * from "./props/contact.js";
export * from "./props/header.js";
export * from "./props/no-auth.js";
