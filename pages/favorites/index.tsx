import { useEffect, useState } from "react";

import { Layout } from "../../components/layouts";
import { FavoritesPokemons, NoFavorites } from "../../components/ui";
import { localFavorites } from "../../utils";

const FavaritesPokemon = () => {
  const [favoritesPokemons, setFavoritesPokemons] = useState<number[]>([]);

  useEffect(() => {
    setFavoritesPokemons(localFavorites.pokemonsFavorites());
  }, []);

  return (
    <Layout title="Favorites Pokemon">
      {favoritesPokemons.length === 0 ? (
        <NoFavorites />
      ) : (
        <FavoritesPokemons favoritesPokemons={favoritesPokemons} />
      )}
    </Layout>
  );
};

export default FavaritesPokemon;
