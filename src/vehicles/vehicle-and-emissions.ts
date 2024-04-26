export interface UserVehicleSelection {
  nickName: string;
  vehicleType: string;
  vehicleSize: string;
  fuelType: string;
  userId: string;
  id: string;
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

export function getVehicleTypes(): string[] {
  return Object.keys(emissionsData);
}

export function getVehicleFuelTypes(vehicleType: string): string[] {
  if (emissionsData[vehicleType]) {
    return Object.keys(emissionsData[vehicleType]);
  }
  return [];
}

export function getVehicleFuelTypeSizes(
  vehicleType: string,
  fuelType: string
): string[] {
  if (emissionsData[vehicleType] && emissionsData[vehicleType][fuelType]) {
    return Object.keys(emissionsData[vehicleType][fuelType]);
  }
  return [];
}

export function getEmissionsPerKilometer(
  vehicleType: string,
  fuelType: string,
  vehicleSize: string
): number | undefined {
  if (
    emissionsData[vehicleType] &&
    emissionsData[vehicleType][fuelType] &&
    emissionsData[vehicleType][fuelType][vehicleSize]
  ) {
    return emissionsData[vehicleType][fuelType][vehicleSize];
  }
  return undefined;
}
