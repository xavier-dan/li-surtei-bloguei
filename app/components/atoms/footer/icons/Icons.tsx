import React from 'react';
import { IconLinkProps } from '@/app/types/interfaces/interfaces';

export default function Icons({ icon: IconComponent, href, size, label = "" }: IconLinkProps) {
    return (
        <>
            <a 
                href={href}
                className="text-[var(--primary-color)] hover:text-gray-600 transition-colors"
                target='blank'
                aria-label={label}
            >
                <IconComponent size={size} />
            </a>
        </>
    );
}