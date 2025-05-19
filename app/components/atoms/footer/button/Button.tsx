import React from 'react';
import { ButtonProps } from '@/app/types/types/types';

export default function Button({ children, onClick, className = "" }: ButtonProps) {
    return (
        <>
            <button
                onClick={onClick}
                className={`bg-[var(--primary-color)] text-[var(--header-bg-color)] px-4 py-2 cursor-pointer ${className}`}
            >
                {children}
            </button>
        </>
    );
}