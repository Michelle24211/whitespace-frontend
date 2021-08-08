/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import CartContext from './CartContext';

const CartProvider: React.FC<any> = ({ children }: any) => {
  const [totalItem, setTotalItem] = useState(0);
  const context = {
    totalItem,
    setTotalItem,
  };

  return (
    <CartContext.Provider value={context}>{children}</CartContext.Provider>
  );
};

export default CartProvider;
