import React from 'react';
import Title from '../../atoms/main/title/Title';
import SignUpForm from '../../molecules/signUpForm/SignUpForm';
import { useTranslations } from 'next-intl';

export default function SignUp() {
    const t = useTranslations('SignUp');

    return (
        <div className="py-12 px-4">
            <div className="text-center mb-8">
                <Title>{t('Title')}</Title>
                <p className="text-gray-600 mt-2">{t('Text')}</p>
            </div>
            <SignUpForm></SignUpForm>
        </div>
    );
}
