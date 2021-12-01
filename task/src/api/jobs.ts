import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Api } from "../models";

export const jobsApi = createApi({
  reducerPath: "jobsApi",
  baseQuery: fetchBaseQuery({
    baseUrl:
      "https://www.welcomekit.co/api/v1/embed?organization_reference=Pg4eV6k",
  }),
  endpoints: (build) => ({
    getData: build.query<Api, void>({
      query: () => ``,
    }),
  }),
});

export const { useGetDataQuery } = jobsApi;
