import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Rating from 'react-rating';
import './Review.css'

const Review = ({ review }) => {
    const { picture, name, review_text, rating } = review;
    return (
        <div className='review'>
            <img className='img-fluid p-4' src={picture} alt="" />
            <div className='px-2 pb-4'>
                <h4>{name}</h4>
                <p><b>Review:</b> {review_text} </p>
                <div className='ratings'>
                    <h6>Rating:
                    <span className='ms-2'>
                    <Rating
                        initialRating={rating}
                        emptySymbol={<FontAwesomeIcon icon={faStar} />}
                        fullSymbol={<FontAwesomeIcon style={{ color: 'goldenrod' }} icon={faStar} />}
                        readonly
                    ></Rating>
                    </span>
                    </h6>
                </div>
            </div>
        </div>
    );
};

export default Review;