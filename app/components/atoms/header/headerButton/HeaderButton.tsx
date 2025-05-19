import React from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { MenuButtonProps } from '@/app/types/interfaces/interfaces';

export default function HeaderButton({ isOpen, onClick }: MenuButtonProps) {
  return (
    <button
      className="md:hidden text-[var(--primary-color)]"
      onClick={onClick}
      aria-label="Toggle menu"
    >
      {isOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
    </button>
  );
}
