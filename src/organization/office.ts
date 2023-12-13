import { Address } from "../tracking/address.js";

// A Singleton Organization Office Object Instance
export interface Office extends Address {
  // Office ID
  id: string;

  // Office Name
  name: string;

  // Employees In The Office
  estimatedEmployeeCount: number;
}
