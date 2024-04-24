export enum VehicleTypes {
  CAR = "car",
  MOTORBIKE = "motorbike",
}

export enum CarFuelTypes {
  PETROL = "petrol",
  DIESEL = "diesel",
  ELECTRIC = "electric",
  HYBRID = "hybrid",
}

export enum MotorbikeFuelTypes {
  PETROL = "petrol",
}

export enum VehicleSizes {
  SMALL = "small",
  MEDIUM = "medium",
  LARGE = "large",
  AVERAGE = "average",
}

export interface CarConfiguration extends VehicleConfiguration {
  fuelType: CarFuelTypes;
}

export interface MotorbikeConfiguration extends VehicleConfiguration {
  fuelType: MotorbikeFuelTypes;
}

interface VehicleConfiguration {
  vehicleType: VehicleTypes;
  vehicleSize: VehicleSizes;
}

const emissionsData: Record<string, Record<string, Record<string, number>>> = {
  "car": {
    "petrol": {
      "small": 0.140798534,
      "medium": 0.178188534,
      "large": 0.272238534,
      "average": 0.163908534,
    },
    "diesel": {
      "small": 0.139306449,
      "medium": 0.167156449,
      "large": 0.208586449,
      "average": 0.169826449,
    },
    "hybrid": {
      "small": 0.101498858,
      "medium": 0.109038436,
      "large": 0.1524358,
      "average": 0.118978588,
    },
    "electric": {
      "small": 0.044399301,
      "medium": 0.048457271,
      "large": 0.053355334,
      "average": 0.050427364,
    },
  },
  "motorbike": {
    "petrol": {
      "small": 0.08319,
      "medium": 0.10108,
      "large": 0.13252,
      "average": 0.113675,
    },
  },
};

export function getVehicleEmissionsKey(
  vehicle: CarConfiguration | MotorbikeConfiguration
): string {
  return `${vehicle.vehicleType}_${vehicle.fuelType}_${vehicle.vehicleSize}`;
}

export function getEmissionsPerKilometerFromVehicle(
  vehicle: CarConfiguration | MotorbikeConfiguration
): number | undefined {
  const key = getVehicleEmissionsKey(vehicle);
  return getEmissionsPerKilometerFromKey(key);
}

export function getEmissionsPerKilometerFromKey(
  vehicleEmissionsKey: string
): number | undefined {
  // Split the key into its components
  const [vehicleType, fuelType, vehicleSize] = vehicleEmissionsKey.split("_");

  // Check if the vehicleType, fuelType, and vehicleSize exist in the emissionsData object
  if (
    emissionsData[vehicleType] &&
    emissionsData[vehicleType][fuelType] &&
    emissionsData[vehicleType][fuelType][vehicleSize]
  ) {
    // Look up the emissions data for the given vehicle key
    const emissionsPerKm = emissionsData[vehicleType][fuelType][vehicleSize];
    return emissionsPerKm;
  }

  // If the vehicleType, fuelType, or vehicleSize do not exist in the emissionsData object, return undefined
  return undefined;
}

export interface UserVehicleSelection {
  nickName: string;
  vehicleEmissionsKey: string;
  userId: string;
  id: string;
}
