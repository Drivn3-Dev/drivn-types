export const employees: PartialRecordWithBaseURL = {
  baseUrl: "/organization/user",
  GET: {
    method: "GET",
    endpoint(id) {
      return `${employees.baseUrl}/${id}`;
    },
  },
  ALL: {
    method: "GET",
    endpoint(orgId, limit, offset) {
      return `${employees.baseUrl}/all/${orgId}?limit=${limit ?? 20}&offset=${
        offset ?? 0
      }`;
    },
  },
};
