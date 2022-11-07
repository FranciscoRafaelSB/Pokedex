import { Grid, Card, Row, Text } from "@nextui-org/react";
import { useRouter } from "next/router";
import { PokemonLightWeight } from "../../interfaces";

interface Props {
  pokemon: PokemonLightWeight;
}

export const PokemonCard = ({ pokemon }: Props) => {
  const router = useRouter();

  const onClick = () => {
    router.push(`/pokemon/${pokemon.id}`);
  };

  return (
    <Grid xs={6} sm={3} md={2} xl={1} key={pokemon.id} onClick={onClick}>
      <Card isHoverable isPressable>
        <Card.Body css={{ p: 1 }}>
          <Card.Image src={pokemon.img} width="100%" height={140} />
        </Card.Body>

        <Card.Footer>
          <Row justify="space-between">
            <Text transform="uppercase">{pokemon.name}</Text>
            <Text>#{pokemon.id}</Text>
          </Row>
        </Card.Footer>
      </Card>
    </Grid>
  );
};
