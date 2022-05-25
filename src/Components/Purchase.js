import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Purchase = () => {
  const [product, setProduct] = useState([]);
  const [quantity, setQuantity] = useState(10);

  useEffect(() => {
    fetch(`http://localhost:5000/product/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);

  const qtyChange = (event) => {
    console.log(event.target.value)
  };

  const handleQty = () => {
    if (quantity < product.minQty) {
      alert("kam hobo na");
    } else {
    }
  };

  const { id } = useParams();
  return (
    <div className="p-6 w-[70%] mx-auto">
      <h2 className="text-3xl font-bold text-center uppercase mb-6">
        Purchase
      </h2>
      <div className="flex justify-around my-12">
        <img src={product.img} alt="" />
        <div>
          <h2 className="text-2xl font-bold">{product.name}</h2>
          <p>Available Quantity: {product.avilableQty}</p>
          <p>Minimum Order Quantity: {product.minQty}</p>
          <p>Price per peace: ${product.priceUnit}</p>
          <div className="mt-6 flex align-center">
             
          </div>
          <p>Total price: </p>
        </div>
      </div>
    </div>
  );
};

export default Purchase;
