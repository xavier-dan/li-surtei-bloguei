import React from 'react';
import Header from '@/app/components/molecules/header/Header';
import Footer from '@/app/components/organisms/footer/Footer';
import BookReviewList from '@/app/components/organisms/bookReviewList/BookReviewList';

export default function Reviews() {
    return (
        <>
            <Header></Header>
            <BookReviewList></BookReviewList>
            <Footer></Footer>
        </>
    );
}