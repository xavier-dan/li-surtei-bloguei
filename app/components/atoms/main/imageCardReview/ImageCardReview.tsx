import React from 'react';
import Image from 'next/image';
import { ImageProps } from '@/app/types/types/types';

export default function ImageCardReview({ src, alt }: ImageProps) {
    return (
        <>
            <Image
                src={src}
                alt={alt}
                width={400}
                height={600}
                className='w-full aspect-[2/3] object-cover' 
            />
        </>
    );
}