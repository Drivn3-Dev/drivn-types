export interface Subsidiary {
  // Subsidiary ID
  id: string;

  // Subsidiary Name
  name: string;

  // Employees In The Subsidiary
  estimatedEmployeeCount: number;

  // The Employee ID's Belonging To The Subsidiary
  employees: string[];

  // The Office Ids Belonging To The Subsidiary
  offices: string[];

  // The Department Ids Belonging To The Subsidiary
  departments: string[];

  // The Organization Id That The Subsidiary Belongs To
  orgId: string;

  // The Timestamp When The Subsidiary Was Created
  createdAt: Date;

  // The Subsidiary Color
  color: string;
}
