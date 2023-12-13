import { Location } from "./location.js";

export interface Address extends Location {
  city: string;
  zip: string;
  streetNameAndNumber: string;
  state: string;
}  