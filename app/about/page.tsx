import React from 'react';
import Header from '../components/molecules/header/Header';
import AboutSect from '../components/organisms/aboutSect/AboutSect';
import Footer from '../components/organisms/footer/Footer';

export default function About() {
    return (
        <>
            <Header></Header>
            <AboutSect></AboutSect>
            <Footer></Footer>
        </>
    );
}