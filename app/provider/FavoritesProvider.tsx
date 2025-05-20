'use client';

import { useState, useCallback, useMemo } from 'react';
import { FavoritesContext } from '../context/FavoritesContext';
import { ChildrenProps } from '../types/interfaces/interfaces';

export function FavoritesProvider({ children }: ChildrenProps) {
    const [favoriteIds, setFavoriteIds] = useState<string[]>([]);

    const toggleFavorite = useCallback((id: string) => {
        setFavoriteIds((prevIds) =>
            prevIds.includes(id) ?
                prevIds.filter((favId) => favId != id) :
                [...prevIds, id]
        );
    }, []);

    const isFavorite = useCallback(
        (id: string) => {
            return favoriteIds.includes(id);
        }, [favoriteIds])

    const contextValue = useMemo(
        () => ({
            favoriteIds, isFavorite, toggleFavorite,
        }), [favoriteIds, isFavorite, toggleFavorite]
    );

    return (
        <FavoritesContext.Provider value={contextValue}>
            {children}
        </FavoritesContext.Provider>
    )
}