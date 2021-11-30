import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

type Data = any;

// Define a service using a base URL and expected endpoints
export const dataApi = createApi({
  reducerPath: "dataApi",
  baseQuery: fetchBaseQuery({
    baseUrl:
      "https://www.welcomekit.co/api/v1/embed?organization_reference=Pg4eV6k",
  }),
  endpoints: (build) => ({
    getData: build.query<Data, string>({
      query: () => ``,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetDataQuery } = dataApi;
