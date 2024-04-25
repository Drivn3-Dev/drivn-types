export interface Endpoint<T = unknown> {
  url: string;
  method: "GET" | "POST" | "PUT" | "DELETE";
  params?: Record<string, unknown>;
  body?: T;
  expectBearerToken?: boolean;
}

export const endpoints: Record<string, Endpoint> = {
  addUserVehicleSelection: {
    url: "/vehicle/selection",
    method: "POST",
    body: {} as Drivn.UserVehicleSelectionCreate,
    expectBearerToken: true,
  },

  fetchUserVehicleSelections: {
    url: "/vehicle/selection",
    method: "GET",
    expectBearerToken: true,
  },

  deleteUserVehicleSelection: {
    url: "/vehicle/selection/delete",
    method: "POST",
    body: {} as Drivn.UserVehicleSelectionDelete,
    expectBearerToken: true,
  },
};
