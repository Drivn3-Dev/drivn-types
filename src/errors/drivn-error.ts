// A Custom Error Handler For The Drivn Application
export class Err extends Error {
  // The Name Of The Error
  name: Type;

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
    name: Type;
    message: string;
    cause?: any;
    relatedVar: string;
  }) {
    super();
    this.name = name;
    this.message = message;
    this.cause = cause;
    this.relatedVar = relatedVar;
  }
}

export enum Type {
  VALIDATOR = "VALIDATOR",
  MISSING_FIELD = "MISSING_FIELD",
  MISSING_PERMISSIONS = "MISSING_PERMISSIONS",
  UNKOWN = "UNKOWN",
}
