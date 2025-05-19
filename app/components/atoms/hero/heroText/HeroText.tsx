import React from 'react';
import { ChildrenProps } from '@/app/types/interfaces/interfaces';

export default function HeroText({children}: ChildrenProps) {
    return (
        <>
            <p className="text-lg md:text-xl mb-6">{children}</p>
        </>
    )
}