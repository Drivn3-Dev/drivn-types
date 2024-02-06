// Record But All Keys Don't Need To Be Used
type PartialRecord<K extends keyof any, T> = Partial<Record<K, T>>;

// The Interface For Routing
interface RouteInterface {
  [x: string]: PartialRecordWithBaseURL;
}

// Adding Base URL
interface PartialRecordWithBaseURL extends RequestFormat {
  baseUrl: string;
}

// Format For Request Contents
type RequestFormat = PartialRecord<RequestOptions, RequestContent>;

// Contents Of Request Documentation
interface RequestContent {
  method: RequestType;
  endpoint:
    | (() => string)
    | ((id: string, limit?: number, offset?: number) => string);
}

// A Type Of Request
type RequestType = "PUT" | "POST" | "GET" | "DELETE";

// Possible Request Types
type RequestOptions = RequestType | "ALL";
