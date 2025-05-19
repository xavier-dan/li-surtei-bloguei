import React from 'react';
import { TextProps } from '@/app/types/types/types';

export default function Text({ children, className = "" }: TextProps) {
    return (
        <>
            <p className={`text-sm ${className}`}>{children}</p>
        </>
    );
}