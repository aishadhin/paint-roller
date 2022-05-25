import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";

const AddReviews = () => {
  const [user] = useAuthState(auth);

  const handleReview = (event) => {
    event.preventDefault();
    const userName = event.target.name.value;
    const userEmail = event.target.email.value;
    const review = event.target.review.value;

    const theReview = { userName, userEmail, review };

    fetch("http://localhost:5000/reviews", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(theReview),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      });
  };

  return (
    <div className="md:w-[25%] mx-auto">
      <h2 className="text-3xl font-bold text-center uppercase mb-6">
        Add A Reviews
      </h2>
      <form
        onSubmit={handleReview}
        className="mt-5 flex flex-col justify-center w-full"
      >
        <input
          className="input input-bordered w-full max-w-xs my-1"
          type="text"
          name="name"
          value={user?.displayName || ""}
          disabled
        ></input>
        <input
          className="input input-bordered w-full max-w-xs my-1"
          type="email"
          name="email"
          value={user?.email || ""}
          disabled
        ></input>
        <textarea
          name="review"
          class="textarea textarea-bordered w-[95%]"
          placeholder="Your Review"
        ></textarea>

        <input
          className="input input-bordered w-full max-w-xs my-1 btn btn-primary text-white"
          type="submit"
          value="Add Review"
        />
      </form>
    </div>
  );
};

export default AddReviews;
