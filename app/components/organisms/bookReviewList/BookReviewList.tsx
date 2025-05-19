'use client';
import React from 'react';
import { useBooks } from '@/app/hooks/useBooks';
import ReviewCard from "../../molecules/reviewCard/ReviewCard";
import Title from '../../atoms/main/title/Title';

export default function BookReviewList() {

    const { books, loading } = useBooks();

    return (
        <>
            <Title>RESENHAS</Title>
            {loading ? <p>Carregando as resenhas...</p> : (
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                        {books.map((book) => (
                            <ReviewCard key={book.id} book={book} />
                        ))}
                    </div>
                </div>)
            }
        </>
    );
}