import React from "react";

const OrdersTable = ({ p, render, setrender }) => {
  const { productName, order, price } = p;
  const totalPrice = order * price;
  const cancelHandler = (id) => {
    const check = window.confirm("Are You sure want to Delelte");
    if (check) {
      fetch(`https://lit-sands-52499.herokuapp.com/cart-delete/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setrender(!render);
        });
    }
  };
  return (
    <tr>
      <th></th>
      <th>{productName}</th>
      <td>{order}</td>
      <td>{price}</td>
      <td>{totalPrice}</td>
      <td>
        <button
          class="btn btn-primary text-white btn-xs"
          onClick={() => cancelHandler(p._id)}
        >
          Cencel Order
        </button>
      </td>
    </tr>
  );
};

export default OrdersTable;
