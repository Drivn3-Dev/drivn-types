import {
  CarEmissions,
  CarFuelTypes,
  MotorbikeEmissions,
  MotorbikeFuelTypes,
  VehicleSizes,
  VehicleTypes,
  getEmissionsPerKilometerFromKey,
  getEmissionsPerKilometerFromVehicle,
  getVehicleEmissionsKey,
} from "./vehicle-and-emissions.js";

// Create a CarEmissions object
const car: CarEmissions = {
  vehicleType: VehicleTypes.CAR,
  fuelType: CarFuelTypes.PETROL,
  vehicleSize: VehicleSizes.SMALL,
  emissionsPerKilometer: 0.140798534,
};

const motorbike: MotorbikeEmissions = {
  vehicleType: VehicleTypes.MOTORBIKE,
  fuelType: MotorbikeFuelTypes.PETROL,
  vehicleSize: VehicleSizes.MEDIUM,
  emissionsPerKilometer: 0.08319,
};

// Test the getVehicleEmissionsKey function
const key = getVehicleEmissionsKey(car);
console.log(key); // Output should be: "car_small_petrol"
const emissions = getEmissionsPerKilometerFromVehicle(car);
console.log(emissions); // Output should be: 0.140798534

const emissions2 = getEmissionsPerKilometerFromKey(key);
console.log(emissions2);

const emissions3 = getEmissionsPerKilometerFromVehicle(motorbike);
console.log(emissions3);
