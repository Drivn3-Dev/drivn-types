import { User } from "./user.js";

export interface UserWithToken extends User {
  // The User's Custom Token For Frontend Auth
  token: string;
}
