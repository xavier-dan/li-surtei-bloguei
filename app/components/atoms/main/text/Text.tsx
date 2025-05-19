import React from 'react';
import { TextProps } from '@/app/types/interfaces/interfaces';

export default function Text({children, className = 'text-gray-700 text-lg leading-relaxed'}: TextProps, ) {
    return (
        <>
            <p className={className}>{children}</p>
        </>
    );
}