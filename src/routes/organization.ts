export const organization: PartialRecordWithBaseURL = {
  baseUrl: "/organization",
  POST: {
    method: "POST",
    endpoint: () => organization.baseUrl,
  },
  PUT: {
    method: "PUT",
    endpoint: (id: string) => `${organization.baseUrl}/${id}`,
  },
  GET: {
    method: "GET",
    endpoint: (id: string) => `${organization.baseUrl}/${id}`,
  },
};
