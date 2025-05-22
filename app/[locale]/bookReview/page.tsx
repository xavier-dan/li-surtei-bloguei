import React from 'react';
import Header from '@/app/components/molecules/header/Header';
import Footer from '@/app/components/organisms/footer/Footer';
import BookDetails from '@/app/components/molecules/bookReview/BookReview';

export default function BookReview() {
    return (
        <>
            <Header />
            <BookDetails />
            <Footer />
        </>
    );
}