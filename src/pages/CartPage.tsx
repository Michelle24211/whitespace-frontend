/* eslint-disable no-plusplus */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable class-methods-use-this */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect, useContext } from 'react';

import CartContext from '../context/CartContext';
import Loading from '../components/Loading';
import CartItem from '../components/CartItem';
import CartSummary from '../components/CartSummary';
import { cartApi } from '../models/ApiModel';
import '../style/cart.css';

interface Props {
  items: [];
  loading: boolean;
}

const Cart: React.FC<Props> = (props) => {
  const [item, setItem] = useState([{}]);
  const [loading, setIsLoading] = useState(true);
  const { setTotalItem } = useContext(CartContext);

  useEffect(() => {
    fetch(cartApi, {
      method: 'GET',
      credentials: 'include',
    })
      .then((res) => res.json())
      .then((body) => {
        setIsLoading(false);
        if (body.data) {
          setItem(body.data.items);
          setTotalItem(body.data.items.length);
        }
      })
      .catch((err) => console.log('API ERROR: ', err));
  }, []);

  const handleDelete = (productId: any) => {
    fetch(cartApi, {
      method: 'DELETE',
      credentials: 'include',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ productId }),
    })
      .then(() => {
        const items: any = item.slice();
        for (let i = 0; i < items.length; i++) {
          if (items[i]._id === productId) {
            items.splice(i, 1);
            break;
          }
        }
        return items;
      })
      .then((items) => {
        setItem(items);
      })
      .catch((err) => console.log('API ERROR: ', err));
  };

  if (loading) {
    return <Loading />;
  }

  let items;
  let totalPrice;
  let totalItems;
  if (item.length > 0) {
    // Grab items
    items = item.map((itemDetails: any, ii) => {
      const { _id, price, name, image } = itemDetails;
      return (
        <CartItem
          key={_id}
          itemId={_id}
          handleDelete={() => handleDelete(_id)}
          price={price}
          name={name}
          picture={image}
        />
      );
    });
    // Cart Summary
    totalPrice = item
      .map((itemDetails: any) => itemDetails.price)
      .reduce((accumulator, currentValue) => accumulator + currentValue);
    totalItems = item.length;
    setTotalItem(item.length);
  }
  return (
    <div className="cart-container">
      <table>
        <tr>
          <th>Product</th>
          <th>Subtotal</th>
        </tr>
        {items}
        {!items && <div>Cart Empty</div>}
      </table>
      {items && (
        <div className="cart-summary">
          <CartSummary totalPrice={totalPrice} totalItems={totalItems} />
        </div>
      )}
    </div>
  );
};

export default Cart;
