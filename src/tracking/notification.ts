// Define an interface for a notification
export interface Notification {
  // Unique identifier for the notification
  id: string;

  // The Title Of The Notification
  title: string;

  // Content of the notification
  body: string;

  // Date and time when the notification was created
  created: string;

  // Flag indicating whether the notification has been read or not
  read: boolean;

  // Optional sender ID for the notification
  userId: string;

  // Type of the notification
  type: NotificationType | string;
}

// Define an enum for the notification types
export enum NotificationType {
  // A System Notification
  SYSTEM = "system",
}
