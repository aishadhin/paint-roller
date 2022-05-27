import React, { useEffect, useState } from "react";
import SingleReview from "./SingleReview";

const ShowReviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <div className="px-12">
      <h2 className="mt-20 text-3xl text-center text-primary">Users Reviews</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {
            reviews.map(review => <SingleReview review={review} key={review._id}></SingleReview>)
        }
      </div>
    </div>
  );
};

export default ShowReviews;
