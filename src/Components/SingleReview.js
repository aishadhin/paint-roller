import React from 'react';

const SingleReview = ({review}) => {
    return (
        <div>
            <p>{review.review}</p>
            <h2>name: {review.userName}</h2>
        </div>
    );
};

export default SingleReview;