// A Singleton User Object Instance
export interface User {
  // First Name
  firstName: string;

  // Last Name
  lastName: string;

  // The User's UID
  uid: string;

  // The User's Email
  email: string;

  // The apns Token
  pushToken?: string;

  // The ID Of The Current In-Use Vehicle
  current?: string;

  // The User Profile Image URL
  image?: string;

  // The User Vehicles
  vehicleIds: string[];

  // The User's Notifications
  notificationIds: string[];

  // The User's Past Tracking Document IDs
  past_trackingIDs?: string[];

  // The Organization ID
  organizationId: string;

  // The Department ID That The User Belongs To
  departmentId?: string;

  // The Office That The User Belongs To
  officeId?: string;

  // Is The User An Admin Of His / Her Organization (Is No If Undefined)
  isAdmin: boolean;

  // Is The User Removed
  removed?: string;

  // The Timestamp When The User Was Added To The Organization
  timeAdded: string;
}
