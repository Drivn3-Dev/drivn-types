// The User Interface Model
export interface User {
  // First Name
  firstName: string;

  // Last Name
  lastName: string;

  // The User's UID
  uid: string;

  // The apns Token
  pushToken?: string;

  // The ID Of The Current In-Use Vehicle
  currentVehicleId?: string;

  // The User Profile Image URL
  image?: string;

  // The User Vehicles
  vehicleIds: string[];

  // The User's Notifications
  notificationIds: string[];

  // The Past Trip Ids
  tripIds: string[];

  // The Organization ID
  organizationId: string;

  // The Department ID That The User Belongs To
  departmentId?: string;

  // The Office That The User Belongs To
  officeId?: string;

  // Is The User An Admin Of His / Her Organization
  isAdmin: boolean;

  // Is The User Removed
  removed?: string;

  // The Timestamp When The User Was Added To The Organization
  timeAdded: Date;

  // Is The User Anonymous
  anonymous: boolean;

  // Is The User The Owner Of The Organization
  isOwner: boolean;

  // The Subsidiary Id
  subsidiaryId?: string;

  // The Status Of The User
  status: "ACTIVE" | "REMOVED" | "INVITED";
}

export interface UserForInvite extends Drivn.UserForCreate {
  isAdmin: boolean;
}
