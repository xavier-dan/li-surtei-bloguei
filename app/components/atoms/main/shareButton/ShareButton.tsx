import { FaShareAlt } from 'react-icons/fa';
import { ShareButtonProps } from '@/app/types/interfaces/interfaces';

export function ShareButton({ onClick }: ShareButtonProps) {
  return (
    <button
      onClick={onClick}
      className="text-gray-600 hover:text-gray-800 text-lg"
      aria-label="Compartilhar"
    >
      <FaShareAlt />
    </button>
  );
}
