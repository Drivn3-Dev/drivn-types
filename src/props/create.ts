import { Organization } from "../organization/organization.js";
import { SubscriptionInfo } from "../organization/subscription-info.js";
import { UserWithCreds } from "../user/user-with-creds.js";

export interface CreateOrganization {
  user: UserForCreate;
  organization: OrganizationForCreate;
  subscription: SubscriptionInfo;
}

export type UserForCreate = Omit<
  UserWithCreds,
  | "timeAdded"
  | "uid"
  | "vehicleIds"
  | "pushToken"
  | "currentVehicleId"
  | "notificationIds"
  | "tripIds"
  | "organizationId"
  | "isAdmin"
  | "anonymous"
  | "isOwner"
  | "status"
>;

export interface OrganizationForCreate
  extends Omit<
    Organization,
    | "authCode"
    | "createdAt"
    | "adminIds"
    | "departmentIds"
    | "officeIds"
    | "subsidiaryIds"
    | "subscriptionId"
    | "ownerId"
    | "fiscalYearStartDate"
  > {
  fiscalYearStartDate: string;
}
