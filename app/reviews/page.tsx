import React from 'react';
import Header from '../components/molecules/header/Header';
import Footer from '../components/organisms/footer/Footer';
import BookReviewList from '../components/organisms/bookReviewList/BookReviewList';

export default function Reviews() {
    return (
        <>
            <Header></Header>
            <BookReviewList></BookReviewList>
            <Footer></Footer>
        </>
    );
}