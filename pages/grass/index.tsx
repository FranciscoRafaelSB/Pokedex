import React from "react";
import { GetStaticProps, NextPage } from "next";

import { Layout } from "../../components/layouts";
import { PokemonByType, PokemonLightWeight } from "../../interfaces";
import { Grid } from "@nextui-org/react";
import { PokemonCard } from "../../components/pokemon";
import { pokeAPI } from "../../api";

interface Props {
  pokemons: PokemonLightWeight[];
}

const PokemonsGrass: NextPage<Props> = ({ pokemons }) => {
  return (
    <Layout title="Grass's Pokemons">
      <Grid.Container gap={2} justify="flex-start">
        {pokemons.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </Grid.Container>
    </Layout>
  );
};

// You should use getStaticProps when:
//- The data required to render the page is available at build time ahead of a user’s request.
//- The data comes from a headless CMS.
//- The data can be publicly cached (not user-specific).
//- The page must be pre-rendered (for SEO) and be very fast — getStaticProps generates HTML and JSON files, both of which can be cached by a CDN for performance.

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await pokeAPI.get<PokemonByType>("/type/grass");

  const pokemons = data.pokemon
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
      pokemons,
    },
  };
};
export default PokemonsGrass;
