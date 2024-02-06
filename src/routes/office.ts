export const office: PartialRecordWithBaseURL = {
  baseUrl: "/organization/office",
  POST: {
    method: "POST",
    endpoint: () => office.baseUrl,
  },
  PUT: {
    method: "PUT",
    endpoint(id) {
      return `${office.baseUrl}/${id}`;
    },
  },
  GET: {
    method: "GET",
    endpoint(id) {
      return `${office.baseUrl}/${id}`;
    },
  },
  ALL: {
    method: "GET",
    endpoint(orgId, limit, offset) {
      return `${office.baseUrl}/all/${orgId}?limit=${limit ?? 20}&offset=${
        offset ?? 0
      }`;
    },
  },
};
