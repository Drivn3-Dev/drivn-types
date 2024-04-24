import {
  CarConfiguration,
  CarFuelTypes,
  MotorbikeConfiguration,
  MotorbikeFuelTypes,
  VehicleSizes,
  VehicleTypes,
  getEmissionsPerKilometerFromKey,
  getEmissionsPerKilometerFromVehicle,
  getVehicleEmissionsKey,
} from "./vehicle-and-emissions.js";

// Create a CarEmissions object
const car: CarConfiguration = {
  vehicleType: VehicleTypes.CAR,
  fuelType: CarFuelTypes.PETROL,
  vehicleSize: VehicleSizes.SMALL,
};

const motorbike: MotorbikeConfiguration = {
  vehicleType: VehicleTypes.MOTORBIKE,
  fuelType: MotorbikeFuelTypes.PETROL,
  vehicleSize: VehicleSizes.MEDIUM,
};

// Test the getVehicleEmissionsKey functions
const key = getVehicleEmissionsKey(car);
console.log(key); // Output should be: "car_small_petrol"
const emissions = getEmissionsPerKilometerFromVehicle(car);
console.log(emissions); // Output should be: 0.140798534

const emissions2 = getEmissionsPerKilometerFromKey(key);
console.log(emissions2);

const emissions3 = getEmissionsPerKilometerFromVehicle(motorbike);
console.log(emissions3);
