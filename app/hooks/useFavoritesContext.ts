'use client';

import { useContext } from "react";
import { FavoritesContext } from "../context/FavoritesContext";
import { FavoritesContextType } from "../types/interfaces/interfaces";

export const useFavoritesContext = (): FavoritesContextType => {
    const context = useContext(FavoritesContext);

    if (context === null) {
        throw new Error(
            'useFavoritesContext deve ser usado dentro de um FavoritesProvider'
        );
    }
    return context;
}