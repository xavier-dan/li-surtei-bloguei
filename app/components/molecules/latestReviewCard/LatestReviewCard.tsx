'use client';

import React from 'react';
import CustomImage from '../../atoms/main/customImage/CustomImage';
import Rating from '../../atoms/main/rating/Rating';
import { useRouter } from 'next/navigation';
import Photo from '@/public/latest-book.jpg';
import { useTranslations } from 'next-intl';

export default function LatestReviewCard() {
    const router = useRouter();
    const t = useTranslations('HomePage');

    return (
        <div
            onClick={() => router.push('/bookReview')}
            className="border shadow-md mx-auto bg-white w-[282px] mt-4 cursor-pointer
            hover:shadow-xl hover:scale-[1.03] transition-transform duration-200 ease-in-out">
            <div className="w-full overflow-hidden">
                <CustomImage src={Photo} alt="Imagem última leitura" quality={90} priority={true} />
            </div>
            <h3 className="mt-4 text-lg font-bold tracking-wide text-center">{t('BookTitle')}</h3>
            <div className="flex justify-center mt-2">
                <Rating />
            </div>

            <p className="text-sm my-3 text-gray-700 text-center">
                {t('Snippet')}
            </p>
        </div>
    );
}