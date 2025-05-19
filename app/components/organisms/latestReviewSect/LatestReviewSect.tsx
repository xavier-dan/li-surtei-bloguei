import React from 'react';
import Title from '../../atoms/main/title/Title';
import LatestReviewCard from '../../molecules/latestReviewCard/LatestReviewCard';

export default function LatestReviewSect() {
    return (
        <>
            <Title>Confira a última resenha</Title>
            <LatestReviewCard />
        </>
    );
}