import { FC } from "react";

import { Grid } from "@nextui-org/react";
import { FavoriteCardPokemon } from "./FavoriteCardPokemon";

interface Props {
  favoritesPokemons: number[];
}

export const FavoritesPokemons: FC<Props> = ({ favoritesPokemons }) => {
  return (
    <Grid.Container gap={2}>
      {favoritesPokemons.map((id) => (
        <FavoriteCardPokemon key={id} id={id} />
      ))}
    </Grid.Container>
  );
};
