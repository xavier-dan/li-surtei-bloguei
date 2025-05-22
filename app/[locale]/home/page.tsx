import React from 'react';
import Hero from '../../components/organisms/hero/Hero';
import LatestReviewSect from '../../components/organisms/latestReviewSect/LatestReviewSect';
import Footer from "../../components/organisms/footer/Footer";

export default function Start() {
    return (
        <>
            <Hero></Hero>
            <LatestReviewSect></LatestReviewSect>
            <Footer></Footer>
        </>

    );
}