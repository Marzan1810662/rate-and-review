import React from 'react';
import useReviews from '../../hooks/useReviews';
import Review from '../Review/Review';
import './Reviews.css'

const Reviews = () => {
    const [reviews, setReviews] = useReviews();
    return (
        <div>
            <h2 className='customer-review-title'>Customer reviews</h2>
            <div className='mx-md-5 px-md-5 d-flex flex-column flex-md-row justify-content-md-evenly flex-wrap'>
            {
                reviews.map(review => <Review key={review._id} review={review}></Review>)
            }
        </div>
        </div>
    );
};

export default Reviews;