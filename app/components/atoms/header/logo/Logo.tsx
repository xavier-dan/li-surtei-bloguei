'use client';

import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { ImageProps } from '@/app/types/types/types';

export default function Logo({ src, alt, width, height, quality, priority }: ImageProps) {
    const router = useRouter();

    return (
        <div onClick={() => router.push('/home')} className='cursor-pointer'>
            <Image
                src={src}
                alt={alt}
                width={width}
                height={height}
                quality={quality}
                priority={priority}
            />
        </div>
    );
}