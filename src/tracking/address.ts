import { Location } from "./location.js";

// Location Address Info
export interface Address extends Location {
  // The City Of The Address
  city: string;

  // The ZIP Code For The Address
  zip: string;

  // The Street Name / Number For The Address
  streetNameAndNumber: string;

  // The State / Province For The Address
  state: string;
}