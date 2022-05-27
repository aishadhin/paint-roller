import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";

const Orders = () => {
  const [user] = useAuthState(auth);

  const [orderPlacer, setOrderPlacer] = useState([]);

  useEffect(() => {
    if (user) {
      fetch(`http://localhost:5000/allorders?user=${user.email}`, {
        method: "GET",
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
        .then((res) =>  res.json())
        .then((data) => setOrderPlacer(data));
    }
  }, [user]);

  return (
    <div>
      <h2>Orders:</h2>

      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Product Name</th>
              <th>Quantity</th>
              <th>Price Per Unit</th>
              <th>Total Price</th>
            </tr>
          </thead>
          <tbody>
            {orderPlacer
              .filter((order) => order.userEmail === user.email)
              .map((p) => (
                <tr>
                  <th></th>
                  <th>{p.productName}</th>
                  <td>{p.order}</td>
                  <td>{p.price}</td>
                  <td>Blue</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
