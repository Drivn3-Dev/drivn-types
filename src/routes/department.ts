export const department: PartialRecordWithBaseURL = {
  baseUrl: "/organization/department",
  POST: {
    method: "POST",
    endpoint: () => department.baseUrl,
  },
  PUT: {
    method: "PUT",
    endpoint(id) {
      return `${department.baseUrl}/${id}`;
    },
  },
  GET: {
    method: "GET",
    endpoint(id) {
      return `${department.baseUrl}/${id}`;
    },
  },
  ALL: {
    method: "GET",
    endpoint(orgId, limit, offset) {
      return `${department.baseUrl}/all/${orgId}?limit=${limit ?? 20}&offset=${
        offset ?? 0
      }`;
    },
  },
};
