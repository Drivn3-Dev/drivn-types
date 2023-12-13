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
}