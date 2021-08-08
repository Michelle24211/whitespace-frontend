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
    fetch(cartApi, {
      method: 'GET',
      credentials: 'include',
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
  }, [user, setTotalItem]);

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
