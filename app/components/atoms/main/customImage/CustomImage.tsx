import React from 'react';
import Image from 'next/image';
import { ImageProps } from '@/app/types/types/types';

export default function CustomImage({ src, alt, quality, priority }: ImageProps) {
    return (
        <div className="w-full overflow-hidden flex justify-center items-center bg-white">
            <Image
                src={src}
                alt={alt}
                quality={quality}
                priority={priority}
                objectFit="cover"
            />
        </div>
    )
}