import React from 'react';
import { NavLinkProps } from '@/app/types/types/types';
import Link from 'next/link';

export default function NavLink({ href, children }: NavLinkProps) {
    return (
        <Link href={href} className='text-[var(--primary-color)] hover:text-[var(--secondary-color)] px-3 py-2 rounded-md text-sm font-medium'>
            {children}
        </Link>
    );
}