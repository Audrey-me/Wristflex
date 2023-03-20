import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

const ReviewForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newReview = { name, rating, comment };
    onSubmit(newReview);
    setName('');
    setRating(0);
    setComment('');
    const reviews = JSON.parse(localStorage.getItem('reviews')) || [];
    localStorage.setItem('reviews', JSON.stringify([...reviews, newReview]));
  };

  const starStyles = {
    cursor: 'pointer',
    fill: '#a67a68',
    stroke: '#a67a68',
    strokeWidth: 1,
    marginRight: '0.25rem',
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={handleNameChange}
          required
          className="border border-gray-400 p-2 w-full rounded-md"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="rating" className="block text-gray-700 font-bold mb-2">
          Rating
        </label>
        <div className='flex'>
          {[1, 2, 3, 4, 5].map((num) => (
            <FaStar
              key={num}
              style={num <= rating ? starStyles : {}}
              onClick={() => handleRatingChange(num)}
            />
          ))}
        </div>
      </div>
      <div className="mb-4">
        <label htmlFor="comment" className="block text-gray-700 font-bold mb-2">
          Comment
        </label>
        <textarea
          id="comment"
          name="comment"
          value={comment}
          onChange={handleCommentChange}
          required
          rows="4"
          className="border border-gray-400 p-2 w-full rounded-md"
        ></textarea>
      </div>
      <button
        type="submit"
        className="bg-[#a67a68] text-white py-2 px-4 rounded-md hover:bg-[#a67a68]/50"
      >
        Submit
      </button>
    </form>
  );
};

export default ReviewForm;
