import React from "react";

const Hero = () => {
  return (
    <div class="hero min-h-screen bg-base-200">
      <div class="hero-content flex-col justify-around lg:flex-row">
        <img
          src="https://themepure.net/template/roxce/roxce/assets/img/why/02/why-1.jpg" alt=""
          class="max-w-sm rounded-lg shadow-2xl"
        />
        <div className="w-1/2">
          <h1 class="text-5xl font-bold">Why Our products is best</h1>
          <p class="py-6">
            We always try to serve our customers to help with the best quality products so they can use them in a long time without having any problems.
          </p>
          <button class="btn btn-primary text-white">Rate Us</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
