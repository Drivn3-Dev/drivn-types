// A Singleton Location Object Instance
export interface Location {
  // The Location Longitude
  lng: number;

  // The Location Latitude
  lat: number;

  // Optional: the radius, in meters, of the region's boundary
  radius?: number;
}