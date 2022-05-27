import {
  faCircleDollarToSlot,
  faGlobeAmericas,
  faPaintRoller,
  faPeopleGroup,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
const Business = () => {
  return (
    <div className="p-20 ">
      <h2 className="my-12 text-3xl text-center font-bold text-primary uppercase">
        Business Summary
      </h2>
      <div className="lg:flex justify-around my-12 gap-4 bg-primary">
        <div className=" text-white text-center p-3">
          <span className="text-white text-5xl">
            <FontAwesomeIcon icon={faGlobeAmericas} />
          </span>
          <h3 className="text-6xl font-bold mt-2">57</h3>
          <p className="text-xl mt-2">Countries</p>
        </div>
        <div className=" text-white text-center p-3">
          <span className="text-white text-5xl">
            <FontAwesomeIcon icon={faPaintRoller} />
          </span>
          <h3 className="text-6xl font-bold mt-2">35k+</h3>
          <p className="text-xl mt-2">Peaces Sales</p>
        </div>
        <div className=" text-white text-center p-3">
          <span className="text-white text-5xl">
            <FontAwesomeIcon icon={faCircleDollarToSlot} />
          </span>
          <h3 className="text-6xl font-bold mt-2">14M+</h3>
          <p className="text-xl mt-2">Total Revenue </p>
        </div>
        <div className=" text-white text-center p-3">
          <span className="text-white text-5xl">
            <FontAwesomeIcon icon={faPeopleGroup} />
          </span>
          <h3 className="text-6xl font-bold mt-2">164</h3>
          <p className="text-xl mt-2">Total Clients</p>
        </div>
      </div>
    </div>
  );
};

export default Business;
