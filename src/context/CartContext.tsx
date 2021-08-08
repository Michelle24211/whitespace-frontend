/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';

// this is the equivalent to the createStore method of Redux
// https://redux.js.org/api/createstore
const CartContext = React.createContext<any>(null);

export default CartContext;
