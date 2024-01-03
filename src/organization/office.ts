import { Address } from "../tracking/address.js";

// A Singleton Organization Office Object Instance
export interface Office extends Address {
  // Office ID
  id: string;

  // Office Name
  name: string;

  // Employees In The Office
  estimatedEmployeeCount: number;

  // The Office Radius For Location Tracking
  radius: number;

  // The Organization Id That The Office Belongs To
  orgId: string;

  // All The Employees In The Office
  employees: string[];

  // The Office Color
  color: string;

  // The Subsidiary Id
  subsidiaryId?: string;
}
