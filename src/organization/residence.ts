import { Address } from "../tracking/address.js";

// A Singleton Organization Residence Object Instance
export interface Residence extends Address {
  // Residence ID
  id: string;

  // User ID
  uid: string;

  // Is the Residence Removed
  removed?: boolean;
}
