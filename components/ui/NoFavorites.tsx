import { Container, Image } from "@nextui-org/react";

export const NoFavorites = () => {
  return (
    <Container
      css={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "calc(100vh - 150px)",
      }}
    >
      <Image src="https://media.giphy.com/media/3o7TKsQ8gqVrXQrjWM/giphy.gif" />
    </Container>
  );
};
