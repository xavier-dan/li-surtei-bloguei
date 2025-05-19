import React from 'react';
import { ChildrenProps } from '@/app/types/interfaces/interfaces';

export default function Title({ children }: ChildrenProps) {
    return (
        <>
            <h2 className="text-3xl font-bold uppercase text-center mt-7 mb-5">{children}</h2>
        </>
    );
}
