import { FC } from "react";

import { useRouter } from "next/router";

import { Grid, Card } from "@nextui-org/react";

interface Props {
  id: number;
}

export const FavoriteCardPokemon: FC<Props> = ({ id }) => {
  const router = useRouter();

  const onFavoriteClick = (id: number): void => {
    router.push(`/pokemon/${id}`);
  };

  return (
    <Grid xs={6} sm={3} md={2} xl={1} key={id}>
      <Card
        isHoverable
        isPressable
        css={{ padding: 10 }}
        onClick={() => onFavoriteClick(id)}
      >
        <Card.Image
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
        />
      </Card>
    </Grid>
  );
};
