import React from 'react';
import { FaStar } from 'react-icons/fa';

export default function Rating({ count = 5 }) {
    return (
        <div className="flex space-x-1">
            {Array.from({ length: count }).map((_, i) => (
                <span key={i}><FaStar color="yellow"/></span>
            ))}
        </div>
    )
}