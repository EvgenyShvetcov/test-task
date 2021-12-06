import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { PokemonBase, Pokemon, GroupBy } from "../models";
import { ExtendedPokemon } from "../models/api";

export const pokemonsApi = createApi({
  reducerPath: "pokemonsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://pokeapi.co/api/v2/",
  }),
  endpoints: (build) => ({
    getPokemons: build.query<ExtendedPokemon[], void>({
      query: () => `/pokemon/`,
      transformResponse: (response: PokemonBase) => {
        return response.results.map((pokemon) => ({
          ...pokemon,
          country: getRandomCounty(),
          age: randomIntFromInterval(1, 6),
        }));
      },
    }),
    getPokemon: build.query<Pokemon, string>({
      query: (name) => `/pokemon/${name}`,
    }),
  }),
});

export const usePokemonUIActions = (
  search: string,
  groupBy: GroupBy
): Pokemon[] => {
  const pokemons = useGetPokemonsQuery().data;
  if (!pokemons) {
    return [];
  }
  const filterdBySearch =
    search === ""
      ? pokemons
      : pokemons.filter((pokemon) => pokemon.name.includes(search));
  switch (groupBy) {
    case "Name":
      return [...filterdBySearch]?.sort((a: Pokemon, b: Pokemon) =>
        a.name.localeCompare(b.name)
      );
    case "Country":
      return [...filterdBySearch]?.sort((a: Pokemon, b: Pokemon) =>
        a.country.localeCompare(b.country)
      );
    case "Age":
      return [...filterdBySearch]?.sort(
        (a: Pokemon, b: Pokemon) => a.age - b.age
      );
    case "None":
      return filterdBySearch;
    default:
      return filterdBySearch;
  }
};

export const { useGetPokemonsQuery, useGetPokemonQuery } = pokemonsApi;

//query | queryFn
//transformResponse only with query

function randomIntFromInterval(min: number, max: number) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function getRandomCounty(): string {
  const countries: Record<number, string> = {
    1: "Russia",
    2: "USA",
    3: "Germany",
    4: "France",
  };

  return countries[randomIntFromInterval(1, 4)];
}
