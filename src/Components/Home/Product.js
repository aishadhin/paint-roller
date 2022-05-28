import React from "react";
import { useNavigate } from "react-router-dom";

const Product = ({ product }) => {
  const { _id, name, img, description, minQty, avilableQty, priceUnit } =
    product;
  const navigate = useNavigate();

  const getProductDetails = (id) => {
    navigate(`/purchase/${id}`);
  };
  console.log(product.minQty);

  return (
    <div class="card card-compact bg-base-100 shadow-xl">
      <figure class="px-10 pt-10">
        <img
          src={img}
          alt="Shoes"
          class="rounded-xl"
        />
      </figure>
      <div class="card-body items-start">
        <h2 class="card-title">{name}</h2>
        <p>{description.slice(0,120)}</p>
        <p className="font-bold">Minimum order Quantity: {minQty}</p>
        <p className="font-bold">Available On Stock: {avilableQty}</p>
        <p className="font-bold">Price Per Unit: {priceUnit}</p>
        <div class="card-actions">
          <button onClick={()=>getProductDetails(_id)} class="btn btn-primary text-white">Buy Now</button>
        </div>
      </div>
    </div>
    // <div className="md:w-[330px]">
    //   <div className="">
    //     <img className="h-[200px]" src={img} alt="" />
    //   </div>
    //   <h3 className="text-2xl my-[20px]">{name}</h3>
    //   <p>{description.slice(0,120)}</p>
    //   <p>Minimum order Quantity: {minQty}</p>
    //   <p>Available On Stock: {avilableQty}</p>
    //   <p>Price Per Unit: {priceUnit}</p>
    //   <button onClick={()=>getProductDetails(_id)} className="text-white btn btn-primary">Buy Now</button>
    // </div>
  );
};

export default Product;
