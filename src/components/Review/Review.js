import React from 'react';
import './Review.css'

const Review = ({ review }) => {
    const { picture, name, review_text, rating } = review;
    return (
        <div className='review'>
            <img className='img-fluid p-4' src={picture} alt="" />
            <div className='px-2'>
                <h4>{name}</h4>
                <p><b>Review:</b> {review_text} </p>
                <h6>Rating: {rating}</h6>
            </div>
        </div>
    );
};

export default Review;