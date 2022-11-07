import { useEffect } from "react";
/* eslint-disable import/no-anonymous-default-export */
const toggleFavorite = () => (id: number) => {
  let favorites: number[] = JSON.parse(
    localStorage.getItem("favorites") || "[]"
  );

  if (favorites.includes(id)) {
    favorites = favorites.filter((favorite) => favorite !== id);
  } else {
    favorites.push(id);
  }

  localStorage.setItem("favorites", JSON.stringify(favorites));
};

const isInFavorites =
  () =>
  (id: number): Boolean => {
    if (typeof window === "undefined") return false;
    const favorites: number[] = JSON.parse(
      localStorage.getItem("favorites") || "[]"
    );

    return favorites.includes(id);
  };

const pokemonsFavorites = () => (): number[] => {
  return JSON.parse(localStorage.getItem("favorites") ?? "[]");
};
export default {
  toggleFavorite: toggleFavorite(),
  isInFavorites: isInFavorites(),
  pokemonsFavorites: pokemonsFavorites(),
};
