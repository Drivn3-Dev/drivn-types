export interface Report {
  // The Report Unique Id
  id: string;

  // The Device Reporting The Issue
  device: string;

  // The Date When The Report Took Place
  date: Date | string;

  // The Message For The Report
  message: string;

  // The Subject For The Report
  subject: string;

  // The Trip Id For The Report
  tripId: string;

  // The User Id For The Report
  userId: string;
}
