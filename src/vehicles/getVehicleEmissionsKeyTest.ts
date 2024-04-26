import {
  getEmissionsPerKilometer,
  getVehicleFuelTypeSizes,
  getVehicleFuelTypes,
  getVehicleTypes,
} from "./vehicle-and-emissions.js";

const vehicleTypes = getVehicleTypes();
console.log(vehicleTypes); // Output should be: ["car", "motorbike"]

const fuelTypes = getVehicleFuelTypes(vehicleTypes[0]);

console.log(fuelTypes); // Output should be: ["petrol", "diesel", "hybrid", "electric"]

const fuelTypeSizes = getVehicleFuelTypeSizes(vehicleTypes[0], fuelTypes[0]);

console.log(fuelTypeSizes); // Output should be: ["small", "medium", "large", "average"]

const emissions = getEmissionsPerKilometer(
  vehicleTypes[0],
  fuelTypes[0],
  fuelTypeSizes[0]
);

console.log(emissions); // Output should be: 0.140798534
