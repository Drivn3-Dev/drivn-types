// A Singleton Organization Department Object Instance
export interface Department {
  // The Unique Department Identifier
  id: string;

  // The Department's Name
  name: string;

  // The Employee ID's Belonging To The Department
  employees: string[];

  // Does The Organization Travel For Business
  travelsForBusiness: boolean;

  // The estimated amount of employees in the department
  employeeCount: number;

  // The Organization Id That The Department Belonds To
  orgId: string;

  // The Department Color
  color: string;

  // The Subsidiary Id
  subsidiaryId?: string;

  // Is The Department Removed
  removed: boolean;
}
