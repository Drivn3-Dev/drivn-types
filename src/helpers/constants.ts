export enum TripPurposes {
    Unknown = 0,
    FromResidenceToWork = 1, // Commute
    FromWorkToResidence = 2, // Commute
    FromResidenceToBusinessLocation = 3, // Business
    FromBusinessLocationToResidence = 4, // Business
    FromWorkToBusinessLocation = 5, // Business
    FromBusinessLocationToWork = 6, // Business
    FromWorkToWork = 7, // Could be Business or Private - maybe refactor
    FromResidenceToPrivateLocation = 8, // Private
    FromPrivateLocationToResidence = 9, // Private
    FromWorkToPrivateLocation = 10, // Private
    FromPrivateLocationToWork = 11, // Likely Private - could be Commute?
    OtherBusinessRelatedTrip = 12, // Business
    OtherPrivateTrip = 13, // Private
    ManualCheckIn = 14,
    ManualCheckOut = 15
}

export enum AttendancePurposes {
    Work = 0,
    Break = 1,
    SickLeave = 2,
    Vacation = 3
}

export enum AttendanceStatus {
    Pending = 0,
    Approved = 1,
    Rejected = 2
}