export interface Attendance {
  // The Overview Unique Id
  id: string;

  // The User Id for the user who created the report
  userId: string;

  // The Date When The Overview was Created
  createdAt: Date;

  // The Start Date for the Overview
  startDate: Date;

  // The End Date for the Overview
  endDate: Date;

  // The purpose of the attendance
  purpose?: number;

  // A comment or description for the attendance
  comment?: string;

  // Whether the attendance is approved or not
  approved?: number;
}