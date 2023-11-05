import React, { createContext, useState } from 'react';
const CartContext = createContext();
export const CartProvider = ({ children }) => {
  const [cartContextItems, setCartContextItems] = useState([]);
  const addToCart = (product) => {
    cartContextItems.push(product)
  };

  return (
    
    <CartContext.Provider value={{ cartContextItems, addToCart , setCartContextItems}}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;