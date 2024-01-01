// A Custom Error Handler For The Drivn Application
export class DrivnError extends Error {
  // The Name Of The Error
  name: DrivnErrorType;

  // The Message For The Error
  message: string;

  // The Cause Of The Error
  cause?: any;

  // The Related Variable For The Error (ex: email, password)
  relatedVar?: string;

  // The Class Constructor
  constructor({
    name,
    message,
    cause,
    relatedVar = "root",
  }: {
    name: DrivnErrorType;
    message: string;
    cause?: any;
    relatedVar: string;
  }) {
    super();
    this.name = name;
    this.message = message;
    this.cause = cause
    this.relatedVar = relatedVar
  }
}

export enum DrivnErrorType {
  VALIDATOR = "VALIDATOR",
  MISSING_FIELD = "MISSING_FIELD",
  MISSING_PERMISSIONS = "MISSING_PERMISSIONS",
  UNKOWN = "UNKOWN",
}
