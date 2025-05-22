import React from 'react';
import Title from '../../atoms/main/title/Title';
import LatestReviewCard from '../../molecules/latestReviewCard/LatestReviewCard';
import { useTranslations } from 'next-intl';


export default function LatestReviewSect() {
    const t = useTranslations('HomePage');

    return (
        <>
            <Title>{t('Latest')}</Title>
            <LatestReviewCard />
        </>
    );
}