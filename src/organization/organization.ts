// A Singleton Organization Object Instance
export interface Organization {
  // The Organization's Admin ID
  adminIds?: string[];

  // The Organization's Authentication Code / ID
  authCode: string;

  // When The Organization Was Created (ISO Format Timestamp)
  createdAt: string;

  // The Name Of The Organization
  name: string;

  // The Organization's Registration Number
  registrationNo: string;

  // The Organization Email Suffix
  emailSuffix?: string;

  // The Employee Count Of The Organization
  employeeCount?: number;

  // The Contact/Support Email For The Users
  contactEmail: string;

  // The Fiscal Year Start Date Of The Organization
  fiscalYearStartDate?: string;

  // The Departments In The Organization
  departmentIds: string[];

  // The Offices In The Organization
  officeIds: string[];

  // The Subscription ID Of The Organization
  subscriptionId: string;

  // Next Payment Date
  nextPaymentDate: string;

  // Automated Payments Or Invoices
  paymentType: "automated" | "invoice";
}
