import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";
import OrdersTable from "./OrdersTable";

const Orders = () => {
  const [user] = useAuthState(auth);

  const [orderPlacer, setOrderPlacer] = useState([]);

  useEffect(() => {
    if (user) {
      fetch(`https://lit-sands-52499.herokuapp.com/allorders?user=${user.email}`, {
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
              .map((p) => <OrdersTable key={p._id} p={p}></OrdersTable>)}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
