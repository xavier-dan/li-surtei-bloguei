'use client';

import React from 'react';
import Logo from '../../atoms/header/logo/Logo';
import NavLink from '../../atoms/header/navLink/NavLink';
import Photo from '@/public/logo_lsb.png';
import HeaderButton from '../../atoms/header/headerButton/HeaderButton';
import { useState } from 'react';
import { useTranslations } from 'next-intl';


export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const t = useTranslations('Header')

    return (
        <header className="w-full bg-[var(--header-bg-color)] shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
                <Logo
                    src={Photo}
                    alt="Logo Li, Surtei, Bloguei"
                    width={120}
                    height={30}
                    quality={100}
                    priority={true}
                />

                <nav className="hidden md:flex space-x-4">
                    <NavLink href="/reviews">{t('Reviews')}</NavLink>
                    <NavLink href="/about">{t('About')}</NavLink>
                    <NavLink href="/comments">{t('Comments')}</NavLink>
                    <NavLink href="/signUp">{t('SignUp')}</NavLink>
                </nav>

                <HeaderButton isOpen={menuOpen} onClick={() => setMenuOpen(!menuOpen)} />

            </div>
            {menuOpen && (
                <nav className="md:hidden px-4 pb-4 flex flex-col space-y-2">
                    <NavLink href="/reviews">{t('Reviews')}</NavLink>
                    <NavLink href="/about">{t('About')}</NavLink>
                    <NavLink href="/comments">{t('Comments')}</NavLink>
                    <NavLink href="/signUp">{t('SignUp')}</NavLink>
                </nav>
            )}
        </header>
    )
}