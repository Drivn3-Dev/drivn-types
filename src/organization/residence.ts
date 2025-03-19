import { Address } from "../tracking/address.js";

// A Singleton Organization Residence Object Instance
export interface Residence extends Address {
  // Residence ID
  id: string;

  // Latitude Of The Residence
  lat: number;

  // Longitude Of The Residence
  lng: number;
}
