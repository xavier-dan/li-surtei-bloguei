import React from 'react';
import Photo from '@/public/image-hero.jpg';
import ImageHero from '../../atoms/hero/imageHero/ImageHero';
import HeroTitle from '../../atoms/hero/heroTitle/HeroTitle';
import HeroText from '../../atoms/hero/heroText/HeroText';
import HeroButton from '../../atoms/hero/heroButton/HeroButton';

export default function HeroImage() {
    return (
        <div className="relative w-full h-screen">
            <ImageHero
                src={Photo}
                alt="Imagem de livro principal do blog"
                width={100}
                height={100}
                quality={90}
                priority={true}
            />

            <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center bg-black/40 px-4">
                <HeroTitle>NOVAS RESENHAS TODA QUINTA-FEIRA</HeroTitle>
                <HeroText>As resenhas mais surtadas do Brasil</HeroText>
                <HeroButton>Conheça</HeroButton>
            </div>
        </div>
    )
}