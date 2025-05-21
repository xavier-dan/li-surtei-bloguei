import React from 'react';
import { FieldProps } from '@/app/types/interfaces/interfaces';

const Input = ({ label, error, ...props }: FieldProps) => (
    <div className="flex flex-col mb-4">
        {label && <label className="block text-sm font-medium text-black mb-1">{label}</label>}
        <input
            {...props}
            className={`border border-[var(--form-color)] px-4 py-2 w-full ${error ? 'border-red-500 focus:ring-red-300' : 'border-[var(--form-color)] focus:ring-black-700'
                }`}
        />
        {error && <p className="text-sm text-red-500 mt-1">{error}</p>}
    </div>
);

export default Input;