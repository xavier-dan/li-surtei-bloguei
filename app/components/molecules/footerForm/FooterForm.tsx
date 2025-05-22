'use client';

import Input from "../../atoms/footer/input/Input";
import Button from "../../atoms/footer/button/Button";
import Text from "../../atoms/footer/text/Text";
import { useState } from "react";
import { useTranslations } from 'next-intl';

export default function FooterForm() {
    const [email, setEmail] = useState("");
    const t = useTranslations('Footer');


    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert(`Email registrado: ${email}`);
    };

    return (
        <section className="mt-10 pt-6 px-4 sm:px-8 md:px-20">
            <div className="border-l-2 border-[var(--primary-color)] pl-4 sm:pl-6">
                <Text className="text-[var(--primary-color)] mb-2 text-[14px]">
                    {t('SubscribeText')}
                </Text>
                <h2 className="text-2xl sm:text-3xl font-bold mb-2 text-[var(--primary-color)]">{t('SubscribeTitle')}</h2>
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2 mt-4 w-full max-w-md">
                    <Input
                        type="email"
                        placeholder={t('Placeholder')}
                        className="flex-1"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <Button>{t('SubscribeButton')}</Button>
                </form>
            </div>
        </section>
    );
}
