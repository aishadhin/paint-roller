import React from "react";

const OrdersTable = ({p}) => {
    const {productName , order , price} = p;
    const totalPrice = order * price;
  return (
    <tr>
      <th></th>
      <th>{productName}</th>
      <td>{order}</td>
      <td>{price}</td>
      <td>{totalPrice}</td>
    </tr>
  );
};

export default OrdersTable;
