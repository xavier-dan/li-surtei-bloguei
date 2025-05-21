import React from 'react';
import { BtnProps } from '@/app/types/interfaces/interfaces';

const Button = ({ children, variant = 'primary', ...props }: BtnProps) => {
    const base = 'rounded-md px-4 py-2 text-sm font-medium focus:outline-none transition';
    const variants = {
        primary: 'bg-[var(--form-color)] text-[var(--primary-color)] hover:bg-black-100',
        outline: 'border border-gray-300 bg-text-gray-700 hover:bg-gray-100',
    };

    return <button className={`${base} ${variants[variant]}`} {...props}>{children}</button>;
};

export default Button;