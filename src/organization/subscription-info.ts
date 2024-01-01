export interface SubscriptionInfo {
  // The Subscription Id
  id: string;

  // Next Payment Date
  nextPaymentDate: Date;

  // Automated Payments Or Invoices
  paymentType: "automated" | "invoice";

  // If The Organization Is On A Free Trial, The Date In WHich The Trial Ends
  freeTrialEndDate?: Date;

  // The Organization Info For The Subscription
  orgId: string;

  // The Transaction Invoice Ids
  invoiceIds: string[];
}

export interface Invoice {
  // The
}

export enum InvalidSubscription {
  MISSING_PAYMENT_OVER_7_DAYS,
  CANCELLED,
  FREE_TRIAL_EXPIRED,
  FREE_TRIAL_MAX_USERS,
}

export enum ValidSubscription {
  MISSING_PAYMENT_UNDER_7_DAYS,
  ACTIVE,
  FREE_TRIAL,
}

export type SubscriptionStatus = InvalidSubscription | ValidSubscription;
