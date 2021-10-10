import { createContext, useContext, useState } from "react";
export const Cartcontext = createContext();

export function CartProvider({ children }) {
  const [cartitems, setCartitems] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [totalAmount, setTotalAmount] = useState([]);
  return (
    <Cartcontext.Provider
      value={{
        cartitems,
        setCartitems,
        wishlist,
        setWishlist,
        totalAmount,
        setTotalAmount,
      }}
    >
      {children}
    </Cartcontext.Provider>
  );
}

export const useCart = () => {
  return useContext(Cartcontext);
};
export default CartProvider;
