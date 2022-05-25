import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Purchase = () => {
  const [product, setProduct] = useState({});
  const [increase, setIncrease] = useState(1);

  useEffect(() => {
    fetch(`http://localhost:5000/product/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);

  const handleIncrease = () => {
    return setIncrease(increase + 1);
  };
  const handleDecrease = () => {
    if (increase <= product.minQty) {
      return setIncrease(increase - 1);
    } else {
      return setIncrease(product.minQty);
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
            <button
              onClick={handleDecrease}
              className=" btn-primary btn text-2xl"
            >
              -
            </button>
            <input
              type="text"
              value={product.minQty > increase ? product.minQty : increase}
              class="input input-bordered w-[25%]"
            />
            <button
              onClick={handleIncrease}
              className=" btn-primary btn text-2xl"
            >
              +
            </button>
          </div>
          <p>Total price: </p>
        </div>
      </div>
    </div>
  );
};

export default Purchase;
