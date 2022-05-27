import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import auth from "../firebase.init";

const Purchase = () => {
  const [user] = useAuthState(auth);
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch(`https://lit-sands-52499.herokuapp.com/product/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);
  const { id } = useParams();

  const handleSubmit = (event) => {
    event.preventDefault();
    const productName = event.target.productName.value;
    const availableQty = event.target.availableQty.value;
    const minOrder = event.target.minOrder.value;
    const price = event.target.price.value;
    const order = event.target.order.value;
    const userName = event.target.userName.value;
    const userEmail = event.target.userEmail.value;
    const userAddress = event.target.userAddress.value;
    const userNumber = event.target.userNumber.value;

    if (order < product.minQty || order > product.avilableQty) {
      alert("Please order between minimum and available number of products");
      return;
    } else {
      alert("Order placed Successfully");
    }

    const orderDetails = {
      productName,
      availableQty,
      minOrder,
      price,
      order,
      userNumber,
      userAddress,
      userEmail,
      userName,
    };

    fetch("https://lit-sands-52499.herokuapp.com/allorders", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(orderDetails),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      });
  };

  return (
    <div className="p-6 w-[70%] mx-auto">
      <h2 className="text-3xl font-bold text-center uppercase mb-6">
        Purchase
      </h2>
      <div className="flex justify-around my-12">
        <img className="md:h-[400px]" src={product.img} alt="" />
        <div>
          <form onSubmit={handleSubmit}>
            <div class="form-control w-full max-w-xs">
              <label class="label">
                <span class="label-text">Product Name</span>
              </label>
              <input
                type="text"
                placeholder="Type here"
                name="productName"
                value={product.name}
                disabled
                class="input input-bordered w-full max-w-xs"
              />
            </div>
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
                <span class="label-text">Your Name</span>
              </label>
              <input
                type="text"
                name="userName"
                value={user?.displayName}
                disabled
                placeholder="Type here"
                class="input input-bordered w-full max-w-xs"
              />
            </div>
            <div class="form-control w-full max-w-xs">
              <label class="label">
                <span class="label-text">Your Email</span>
              </label>
              <input
                type="email"
                name="userEmail"
                placeholder="Type here"
                disabled
                value={user.email}
                class="input input-bordered w-full max-w-xs"
              />
            </div>
            <div class="form-control w-full max-w-xs">
              <label class="label">
                <span class="label-text">Your Address</span>
              </label>
              <input
                type="text"
                name="userAddress"
                placeholder="Type here"
                class="input input-bordered w-full max-w-xs"
              />
            </div>
            <div class="form-control w-full max-w-xs">
              <label class="label">
                <span class="label-text">Your Phone Number</span>
              </label>
              <input
                type="text"
                name="userNumber"
                placeholder="Type here"
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
              <input
                id="btnID"
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
