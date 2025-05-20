import { createContext } from 'react';
import { FavoritesContextType } from '../types/interfaces/interfaces';

export const FavoritesContext = createContext<FavoritesContextType | null>(null);