import React from 'react';
import Image from 'next/image';
import { ImageProps } from '@/app/types/types/types';

export default function ImageAbout({ src, alt }: ImageProps) {
    return (
        <div className="w-full">
            <Image
                src={src}
                alt={alt}
                width={600}
                height={400}
                className="rounded-xl shadow-lg object-cover w-full h-auto"
                priority
            />
        </div>
    );
}