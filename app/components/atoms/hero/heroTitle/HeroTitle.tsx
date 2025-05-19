import React from 'react';
import { ChildrenProps } from '@/app/types/interfaces/interfaces';

export default function HeroTitle({ children }: ChildrenProps) {
    return (
        <>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">{children}</h1>
        </>
    )
}