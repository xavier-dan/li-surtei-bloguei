import React from 'react';
import { InputProps} from '@/app/types/types/types';

export default function Input({ placeholder, type = "text", className = "", onChange, name, value}: InputProps) {
    return (
        <div className="flex flex-col mb-4">
            <input 
                type={type}
                placeholder={placeholder}
                onChange={onChange}
                name={name}
                value={value}
                className={`border border-[var(--form-color)] px-4 py-2 w-full ${className}`}
                required
            />
        </div >
    )
}