import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div class="hero min-h-screen md:p-12">
      <div class="hero-content flex-col justify-around lg:flex-row">
        <img
          src="https://themepure.net/template/roxce/roxce/assets/img/why/02/why-1.jpg" alt=""
          class=" rounded-lg shadow-2xl"
        />
        <div className="">
          <h1 class="text-5xl font-bold">Why Our products is best</h1>
          <p class="py-6">
            We always try to serve our customers to help with the best quality products so they can use them in a long time without having any problems.
          </p>
          <Link class="btn btn-primary text-white" to="/dashboard/reviews">Give us a review</Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
