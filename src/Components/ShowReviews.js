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
      <h2 className="my-12 text-3xl text-center">Users Reviews</h2>
      <div className="grid my-12 grid-cols-3 gap-10 justify-around">
        {
            reviews.map(review => <SingleReview review={review} key={review._id}></SingleReview>)
        }
      </div>
    </div>
  );
};

export default ShowReviews;
