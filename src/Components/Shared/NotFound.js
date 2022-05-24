import React from "react";
import notfound from "../../img/notFound.png";

const NotFound = () => {
  return (
    <div className="flex items-center justify-center">
      <div>
        <h1 className="text-6xl font-bold">Page Not Found</h1>
        <img src={notfound} alt="" />
      </div>
    </div>
  );
};

export default NotFound;
