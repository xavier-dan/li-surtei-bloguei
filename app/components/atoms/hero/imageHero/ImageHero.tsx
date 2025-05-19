import React from 'react';
import Image from 'next/image';
import { ImageProps } from '@/app/types/types/types';

export default function ImageHero({src, alt, quality, priority}: ImageProps) {
    return (
        <>
            <Image 
                src={src}
                alt={alt}
                fill
                className='object-cover'
                quality={quality}
                priority={priority}
            />
        </>
    )
}