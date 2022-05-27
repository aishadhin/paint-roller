import React from "react";

const SingleReview = ({ review }) => {
  return (
    <div class="card bg-base-100 shadow-xl">
      <div class="card-body">
        <h2 class="card-title">{review.userName}</h2>
        <p>{review.review}</p>
      </div>
    </div>
  );
};

export default SingleReview;
