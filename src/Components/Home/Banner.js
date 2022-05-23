import React from "react";
import bannerImg from "../../img/bnr.jpg";
import Button from "../Shared/Button";

const Banner = () => {
  return (
    <div
      className=""
      style={{
        backgroundImage: `url(${bannerImg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="pt-48 pb-48">
        <h1 className="text-center paint text-8xl uppercase bold text-white">
          Buy Paint Roller
        </h1>
        <h3 className="text-center tracking-[1em] text-2xl uppercase bold text-white">
          In reasonable price
        </h3>
        <div className="text-center ">
          <button className="btn btn-outline btn-primary bg-white mt-5">
            Explore Our Products
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
