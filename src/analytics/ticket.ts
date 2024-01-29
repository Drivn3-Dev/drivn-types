export interface SupportTicket {
  // The Ticket Id
  id: string;

  // The Ticket Title
  title: string;

  // The Ticket Subject
  subject: string;

  // The Ticket Message
  message: string;

  // The Ticket Timestamp
  createdAt: Date;

  // The Ticket Helper
  helper: string;

  // The Ticket Conversation
  responses: TicketMessage[];

  // Is The Ticket Resolved
  resolved: boolean;

  // The Organization Id Associated With The Issue
  orgId: string;

  // The User That Reported The Issue
  issuingUser: string;
}

export interface TicketMessage {
  // The Person Sending The Message
  sender: "support" | "customer";

  // The Body Of The Message
  body: string;

  // The Date The Message Was Sent
  createdAt: Date;
}
