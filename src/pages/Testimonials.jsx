import React, { useEffect, useState } from "react";

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("/api/getReviews.js")
      .then((res) => res.json())
      .then((data) => setReviews(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-4 py-12 sm:py-16 md:py-20">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-lora font-semibold mb-8 text-green-800 text-center">
        Testimonials
      </h1>

      <p className="text-center text-gray-700 mb-10">
        See what our customers are saying about Swad Mushrooms.
      </p>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {reviews.length === 0 && (
          <p className="text-center col-span-full">No reviews yet.</p>
        )}

        {reviews.map((review, index) => (
          <div key={index} className="bg-white p-6 rounded-2xl shadow-md">
            <p className="text-gray-800 mb-4">"{review.text}&quot;</p>
            <p className="text-gray-600 font-semibold">
              - {review.author_name}
            </p>
            <p className="text-yellow-500">
              {"★".repeat(Math.round(review.rating))}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
