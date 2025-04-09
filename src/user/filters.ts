// The selected filter for the trips
export interface TripsFilter {
    timerange: string,

    hourInterval: string,

    confirmed: boolean,

    commuter: boolean,

    car: boolean,

    bicycle: boolean,
    
    public: boolean,
}; 