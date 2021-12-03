export interface PokemonBase {
  count: number;
  next: null | string;
  previous: null | string;
  results: Pokemon[];
}


export interface Pokemon {
  name: string;
  url: string;
}

export interface ExtendedPokemon extends Pokemon {
  age: number;
  country: string;
}