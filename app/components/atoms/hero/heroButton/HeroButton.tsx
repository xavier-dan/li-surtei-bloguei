'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { ChildrenProps } from '@/app/types/interfaces/interfaces';

export default function HeroButton({ children }: ChildrenProps) {
    const router = useRouter();

    return (
        <>
            <button
                onClick={() => router.push('/reviews')}
                className="bg-red-700 hover:bg-red-500 text-white font-semibold py-3 px-6 rounded-xl transition">
                {children}
            </button>
        </>
    )
}