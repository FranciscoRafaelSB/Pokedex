import { useEffect, useState } from "react";

import { NextPage, GetStaticProps, GetStaticPaths } from "next";

import confetti from "canvas-confetti";

import { pokeAPI } from "../../api";
import { Layout } from "../../components/layouts";
import { Pokemon } from "../../interfaces";
import { localFavorites } from "../../utils";

import { Button, Card, Container, Grid, Image, Text } from "@nextui-org/react";

interface Props {
  pokemon: Pokemon;
}

const PokemonPage: NextPage<Props> = ({ pokemon }) => {
  const [isInFavorites, setIsInFavorites] = useState<Boolean>(false);

  const onToggleFavorite = () => {
    localFavorites.toggleFavorite(pokemon.id);
    setIsInFavorites(!isInFavorites);

    if (!isInFavorites) {
      confetti({
        zIndex: 100,
        particleCount: 100,
        spread: 160,
        angle: -100,
        origin: { y: 0, x: 1 },
      });
    }
  };

  useEffect(() => {
    setIsInFavorites(localFavorites.isInFavorites(pokemon.id));
  }, [pokemon.id]);

  return (
    <Layout title={pokemon.name}>
      <Grid.Container css={{ marginTop: "5px" }} gap={2}>
        <Grid xs={12} md={4}>
          <Card isHoverable css={{ padding: "$1" }}>
            <Card.Body>
              <Card.Image
                src={
                  pokemon.sprites.other?.dream_world.front_default ||
                  "/no-image.png"
                }
                alt={pokemon.name}
                width="100%"
                height={200}
              />
            </Card.Body>
          </Card>
        </Grid>
        <Grid xs={12} md={8}>
          <Card>
            <Card.Header
              css={{ display: "flex", justifyContent: "space-around" }}
            >
              <Text h1 transform="uppercase">
                {pokemon.name}
              </Text>
              <Button
                color={"gradient"}
                ghost={!isInFavorites}
                onClick={onToggleFavorite}
              >
                {!isInFavorites ? "Save as Favorite" : "Remove from Favorites"}
              </Button>
            </Card.Header>
            <Card.Body>
              <Container css={{ display: "flex" }}>
                <Image
                  src={pokemon.sprites.front_default}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                <Image
                  src={pokemon.sprites.back_default}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                <Image
                  src={pokemon.sprites.front_shiny}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                <Image
                  src={pokemon.sprites.back_shiny}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
              </Container>
            </Card.Body>
          </Card>
        </Grid>
      </Grid.Container>
    </Layout>
  );
};

// You should use getStaticPaths if you’re statically pre-rendering pages that use dynamic routes

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const pokemons151 = [...Array(151)].map((_, i) => `${i + 1}`);

  return {
    paths: pokemons151.map((id) => ({
      params: { id },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params as { id: string };

  const { data } = await pokeAPI.get<Pokemon>(`/pokemon/${id}`);

  return {
    props: {
      pokemon: {
        id: data.id,
        name: data.name,
        sprites: data.sprites,
      },
    },
  };
};

export default PokemonPage;
