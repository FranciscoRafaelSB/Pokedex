import { Grid } from "@nextui-org/react";
import { GetStaticProps, NextPage } from "next";

import { pokeAPI } from "../../api";
import { Layout } from "../../components/layouts";
import { PokemonCard } from "../../components/pokemon";
import { PokemonByType, PokemonLightWeight } from "../../interfaces";

interface Props {
  pokemons: PokemonLightWeight[];
}

const FirePokemons: NextPage<Props> = ({ pokemons }) => {
  return (
    <Layout title="Fire's Pokemons">
      <Grid.Container gap={2} justify="flex-start">
        {pokemons.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </Grid.Container>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await pokeAPI.get<PokemonByType>("/type/fire");

  const pokemonsFire = data.pokemon
    .map((pokemon) => {
      const id = Number(pokemon.pokemon.url.split("/")[6]);
      if (id > 151) return;

      return {
        id,
        name: pokemon.pokemon.name,
        img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`,
      };
    })
    .filter(Boolean);

  return {
    props: {
      pokemons: pokemonsFire,
    },
  };
};

export default FirePokemons;
