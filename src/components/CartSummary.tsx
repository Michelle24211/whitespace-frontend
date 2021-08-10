/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import '../style/cart.css';

function CartSummary(props: any) {
  return (
    <table>
      <tr>
        <td>Items</td>
        <td>{props.totalItems}</td>
      </tr>
      <tr>
        <td>Subtotal</td>
        <td>${props.totalPrice && props.totalPrice.toFixed(2)}</td>
      </tr>
      <tr>
        <td>Tax</td>
        <td>${(props.totalPrice * 0.075).toFixed(2)}</td>
      </tr>
      <tr>
        <td className="cart-total">Total</td>
        <td>${(props.totalPrice + props.totalPrice * 0.075).toFixed(2)}</td>
      </tr>
    </table>
  );
}

export default CartSummary;
