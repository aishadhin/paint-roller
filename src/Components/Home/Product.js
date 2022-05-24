import React from "react";
import { useNavigate } from "react-router-dom";

const Product = ({ product }) => {
  const {_id ,name, img, description, minQty, avilableQty, priceUnit } = product;
  const navigate = useNavigate();

  const getProductDetails = id =>{
    navigate(`/purchase/${id}`)
  }

  return (
    <div className="md:w-[330px]">
      <div className="">
        <img className="h-[200px]" src={img} alt="" />
      </div>
      <h3 className="text-2xl my-[20px]">{name}</h3>
      <p>{description.slice(0,120)}</p>
      <p>Minimum order Quantity: {minQty}</p>
      <p>Available On Stock: {avilableQty}</p>
      <p>Price Per Unit: {priceUnit}</p>
      <button onClick={()=>getProductDetails(_id)} className="btn btn-primary text-white">Buy Now</button>
    </div>
  );
};

export default Product;
