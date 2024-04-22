/**
 * @deprecated Use VehicleEmissions Instead
 */
export interface VehicleModel {
  // The Model ID
  model_id: string;

  // The Model Year
  year: number;

  // The Model Name
  name: string;

  // The Model's Parent Make
  make: string;

  // The Model's Parent Make ID
  make_id: string;

  // The Vehicle's Emissions
  emissions?: number;
}

// Since All User Vehicles Require Emissions, This Type Will Be Used For It
export type UserVehicle = Required<VehicleModel>;
