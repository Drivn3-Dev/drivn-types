import { User } from "./user.js";

export interface UserWithCreds extends User {
  // The Email Of The User
  email: string;

  // The Password Of The User
  password: string;
}
