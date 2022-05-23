import React from "react";
import bannerImg from "../../img/bnr.jpg";

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
      <div className="md:pt-48 md:pb-48 pt-20 pb-20">
        <h1 className="text-center paint text-3xl md:text-8xl uppercase bold text-white">
          Buy Paint Roller
        </h1>
        <h3 className="text-center md:tracking-[1em] md:text-4xl text-1xl uppercase bold text-white">
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
