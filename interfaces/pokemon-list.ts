export interface PokemonListResonse {
  count: number;
  next?: string;
  previous?: string;
  results: PokemonLightWeight[];
}

export interface PokemonLightWeight {
  name: string;
  url?: string;
  id: number;
  img: string;
}
