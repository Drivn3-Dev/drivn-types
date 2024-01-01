// A Subscription Cell Interface
export interface SubscriptionCellData {
  // The Subscription Title
  title: string;

  // The Subscription Description
  desc: string;

  // The Subscription Price
  price: number;

  // The Subscription Features
  features: (string | { [x: string]: string })[];
}
