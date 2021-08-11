import React, { useContext, useEffect } from 'react';
import { Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CartContext from '../context/CartContext';
import UserContext from '../context/UserContext';
import { cartApi } from '../models/ApiModel';

const CartButton: React.FC = () => {
  const { totalItem, setTotalItem } = useContext(CartContext);
  const { user } = useContext(UserContext);

  useEffect(() => {
    const jwtToken = localStorage.getItem('jwtToken');
    if (jwtToken) {
      fetch(cartApi, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ jwtToken }),
      })
        .then((response) => {
          if (!response.ok) {
            setTotalItem(0);
            throw new Error('Cart not available');
          }

          return response.json();
        })
        .then((body) => {
          setTotalItem(body.data.items.length);
        })
        .catch((err) => console.log('API ERROR: ', err));
    } else {
      const cart = localStorage.getItem('cart');
      if (cart && Object.keys(JSON.parse(cart)).length > 0)
        setTotalItem(JSON.parse(cart).length);
    }
  }, [user, setTotalItem]);
  console.log(totalItem);
  return (
    <>
      <Link to="/cart">
        <Image
          className="cart-icon"
          src="https://www.rawshorts.com/freeicons/wp-content/uploads/2017/01/red_shoppictbasket_1484336512-1.png"
          alt="Cart icon"
        />
      </Link>
      {!!totalItem && totalItem > 0 && (
        <span
          style={{
            bottom: '1ex',
            position: 'relative',
            color: '#a11b08',
          }}
        >
          {totalItem}
        </span>
      )}
    </>
  );
};

export default CartButton;
