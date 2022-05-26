import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Purchase = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/product/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);
  const { id } = useParams();

  const handleSubmit = (event) => {
    event.preventDefault();
    const availableQty = event.target.availableQty.value;
    const minOrder = event.target.minOrder.value;
    const price = event.target.price.value;
    const order = event.target.order.value;

    if (order < product.minQty || order > product.avilableQty) {
      alert("Please order between minimum and available number of products");
      return
    }

    const orderDetails = { availableQty, minOrder, price, order };
    console.log(orderDetails);
  };

  return (
    <div className="p-6 w-[70%] mx-auto">
      <h2 className="text-3xl font-bold text-center uppercase mb-6">
        Purchase
      </h2>
      <div className="flex justify-around my-12">
        <img src={product.img} alt="" />
        <div>
          <form onSubmit={handleSubmit}>
            <div class="form-control w-full max-w-xs">
              <label class="label">
                <span class="label-text">Available Quantity</span>
              </label>
              <input
                type="text"
                placeholder="Type here"
                name="availableQty"
                value={product.avilableQty}
                disabled
                class="input input-bordered w-full max-w-xs"
              />
            </div>
            <div class="form-control w-full max-w-xs">
              <label class="label">
                <span class="label-text">Minimum Order Quantity</span>
              </label>
              <input
                type="text"
                placeholder="Type here"
                name="minOrder"
                value={product.minQty}
                disabled
                class="input input-bordered w-full max-w-xs"
              />
            </div>
            <div class="form-control w-full max-w-xs">
              <label class="label">
                <span class="label-text">Price per peace in $</span>
              </label>
              <input
                type="text"
                placeholder="Type here"
                value={product.priceUnit}
                name="price"
                disabled
                class="input input-bordered w-full max-w-xs"
              />
            </div>
            <div class="form-control w-full max-w-xs">
              <label class="label">
                <span class="label-text">Your order quantity</span>
              </label>
              <input
                type="text"
                name="order"
                placeholder="Type here"
                class="input input-bordered w-full max-w-xs"
              />
            </div>
            <div class="form-control w-full max-w-xs">
              <label class="label">
                <span class="label-text">Total Price</span>
              </label>
            </div>
            <div class="form-control w-full max-w-xs">
              <input
                type="submit"
                class="input mt-3 input-bordered w-full max-w-xs bg-primary text-white"
                value="Place Order"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Purchase;
