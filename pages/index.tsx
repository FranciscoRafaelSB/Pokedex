import { GetStaticProps, NextPage } from "next";

import { Grid } from "@nextui-org/react";

import { pokeAPI } from "../api";
import { Layout } from "../components/layouts";
import { PokemonListResonse, PokemonLightWeight } from "../interfaces";
import { PokemonCard } from "../components/pokemon";

interface Props {
  pokemons: PokemonLightWeight[];
}

const HomePage: NextPage<Props> = ({ pokemons }) => {
  // console.log(pokemons);

  return (
    <Layout title="Pokemon List">
      <Grid.Container gap={2} justify="flex-start">
        {pokemons.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </Grid.Container>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await pokeAPI.get<PokemonListResonse>("/pokemon?limit=151");

  const pokemons: PokemonLightWeight[] = data.results.map((pokemon, index) => ({
    ...pokemon,
    id: index + 1,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
      index + 1
    }.svg`,
  }));

  return {
    props: {
      pokemons,
    },
  };
};

export default HomePage;
