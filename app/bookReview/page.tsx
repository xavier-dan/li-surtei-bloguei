import React from 'react';
import Header from '../components/molecules/header/Header';
import Footer from '../components/organisms/footer/Footer';
import BookDetails from '../components/molecules/bookReview/BookReview';

export default function BookReview() {
    return (
        <>
            <Header />
            <BookDetails />
            <Footer />
        </>
    );
}