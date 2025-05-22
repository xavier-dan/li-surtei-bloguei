import React from 'react';
import { useTranslations } from 'next-intl';


export default function Copyright() {
    const t = useTranslations('Footer');

    return (
        <div className='mx-4'>
            <p>{t('Copyright')}</p>
        </div>
    );
}