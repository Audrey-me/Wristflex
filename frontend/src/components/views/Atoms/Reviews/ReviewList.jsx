import React, {useState} from 'react';
import {FaUserCircle} from 'react-icons/fa'
import { FaStar } from 'react-icons/fa';


const ReviewList = () => {
  const [reviews, setReviews] = useState(() =>
    JSON.parse(localStorage.getItem('reviews')) || []
  );

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Customer Reviews</h2>
      {reviews.length > 0 ? (
        <ul>
          {reviews.map((review, index) => (
            <li key={index} className="mb-4 ">
              <div className='flex justify-between'>
                <div className="flex items-center mb-2">
                  <FaUserCircle size={24} />
                  <span className="text-gray-700 ml-2">{review.name}</span>
                </div>
                <div className="flex  items-center">
                  <FaStar size={24} color='#a67a68'  />
                  <span className="text-gray-700 ml-2">{review.rating} out of 5 stars</span>
                </div>

              </div>
              <p className="text-gray-700 mt-2">{review.comment}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No reviews yet.</p>
      )}
    </div>
  );
};

export default ReviewList