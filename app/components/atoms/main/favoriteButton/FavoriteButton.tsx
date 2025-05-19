import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { FavoriteButtonProps } from '@/app/types/interfaces/interfaces';

export function FavoriteButton({ isActive, onClick }: FavoriteButtonProps) {
  return (
    <button
      onClick={onClick}
      className="text-red-500 hover:text-red-600 text-lg"
      aria-label="Favoritar"
    >
      {isActive ? <FaHeart /> : <FaRegHeart />}
    </button>
  );
}
