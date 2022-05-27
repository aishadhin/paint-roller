import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="bg-primary">
      <div className="md:pt-48 md:pb-48 pt-20 pb-20">
        <h1 className="text-center paint text-3xl md:text-8xl uppercase bold text-white">
          Buy Paint Roller
        </h1>
        <h3 className="text-center md:tracking-[1em] md:text-4xl text-1xl font-normal uppercase bold text-white">
          In reasonable price
        </h3>
        <div className="text-center ">
          <Link class="btn btn-primary bg-white text-primary mt-6" to="/login">
            Please Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
