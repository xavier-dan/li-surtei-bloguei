import { useState } from 'react';

export default function useFavorite(initialState: boolean = false) {
  const [favorito, setFavorito] = useState(initialState);

  const toggleFavorito = () => {
    setFavorito((prev) => !prev);
  };

  return {
    favorito,
    toggleFavorito,
  };
}
