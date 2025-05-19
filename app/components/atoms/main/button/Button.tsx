import React from 'react';
import { TextProps } from '@/app/types/types/types';

export default function Button({ children, className = '' }: TextProps) {
    return (
        <button
            type="submit"
            className={`bg-[var(--form-color)] text-[var(--primary-color)] px-4 py-2 cursor-pointer ${className} ${className}`}
        >
            {children}
        </button>
    );
}
