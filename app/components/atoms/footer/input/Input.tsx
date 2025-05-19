import React from 'react';
import { InputProps} from '@/app/types/types/types';

export default function Input({ placeholder, type = "text", className = "", onChange}: InputProps) {
    return (
        <>
            <input 
                type={type}
                placeholder={placeholder}
                onChange={onChange}
                className={`border border-[var(--primary-color)] px-4 py-2 w-full ${className}`}
            />
        </>
    )
}