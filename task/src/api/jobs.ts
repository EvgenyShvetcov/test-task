import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { PokemonBase, Pokemon } from "../models";

export const jobsApi = createApi({
  reducerPath: "jobsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://pokeapi.co/api/v2/",
  }),
  endpoints: (build) => ({
    getData: build.query<Pokemon[], void>({
      query: () => "/pokemon",
      transformResponse: (response: PokemonBase) => response.results,
    }),
    getPokemon: build.query<any, string>({
      query: (name) => `/pokemon/${name}`,
    }),
  }),
});

export const { useGetDataQuery, useGetPokemonQuery } = jobsApi;

//query | queryFn
//transformResponse only with query
