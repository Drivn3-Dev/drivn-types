/**
 * @deprecated Use Vehicle Makes Instead
 */
export type Vehicle = {
  // The Vehicle's Model Type
  model: string;

  // The Vehicle's Model Year
  model_year: number;

  // The Brand Of The Vehicle
  brand: string;

  // The Vehicle's Registration / License Plate
  registration: string;

  // The Vehicles VIN Number
  vin: number;

  // The Vehicle's Unique Identifier
  vehicle_id: string;

  // The Vehicle's Emissions
  emissions: Emissions;
};

// A Singleton Vehicle Emissions Object Instance
type Emissions = {
  // The Vehicle's Carbon Monoxide Emissions
  co?: number;

  // The Vehicle's Carbon Dioxide Emissions
  co2: number;

  // The Vehicle's Nitrogen Oxide Emissions
  nox?: number;
};