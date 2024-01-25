import type {
  Request as ExpressRequest,
  Response as ExpressResponse,
  NextFunction
} from "express";
import { User } from "../user/user.js";

// Adding The User To The Express Request
export declare interface UserRequest extends ExpressRequest {
  // The User Info Object
  user?: User;
}

// Custom Request Body
export declare interface Request<T = unknown> extends UserRequest {
  body: T;
}

// Unprotected Request Body (No user Info)
export declare interface UnprotectedRequest<T = unknown> extends ExpressRequest {
  body: T;
}

// Custom Response
export declare interface Response<T = any> extends ExpressResponse<T> {}

// Exporting The Next Function
export declare interface Next extends NextFunction {}