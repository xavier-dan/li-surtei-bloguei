import React from 'react';
import FooterForm from '../../molecules/footerForm/FooterForm';
import FooterLinks from '../../molecules/footerLinks/FooterLinks';
import Copyright from '../../atoms/footer/copyright/Copyright';

export default function Footer() {
    return (
        <footer className="mt-4 px-2 sm:px-20 pt-0 pb-8 bg-[var(--header-bg-color)] text-sm text-[var(--primary-color)]">
            <div className="flex flex-col gap-8">
                <FooterForm />
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
                    <FooterLinks />
                    <Copyright />
                </div>
            </div>
        </footer>

    );
}