import React from 'react';
import Header from '@/app/components/molecules/header/Header';
import AboutSect from '@/app/components/organisms/aboutSect/AboutSect';
import Footer from '@/app/components/organisms/footer/Footer';

export default function About() {
    return (
        <>
            <Header></Header>
            <AboutSect></AboutSect>
            <Footer></Footer>
        </>
    );
}