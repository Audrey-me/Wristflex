import React, { useState } from 'react';
import ReviewList from './ReviewList';
import ReviewForm from './ReviewForm';

const Reviewsection = () => {
  const [reviews, setReviews] = useState([]);

  const handleSubmitReview = (review) => {
    setReviews([review, ...reviews]);
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Customer Reviews</h2>
      <div className="mb-4">
        <ReviewForm onSubmit={handleSubmitReview} />
      </div>
      <div>
        {reviews.map((review, index) => (
          <ReviewList key={index} review={review} />
        ))}
      </div>
    </div>
  );
};

export default Reviewsection;
