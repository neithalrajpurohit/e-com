import { createContext, useContext, useState } from "react";
export const Cartcontext = createContext();

function CartProvider({ children }) {
  const [cartitems, setCartitems] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [totalAmount, setTotalAmount] = useState([]);
  const [count, setCount] = useState(1);

  return (
    <Cartcontext.Provider
      value={{
        cartitems,
        setCartitems,
        wishlist,
        setWishlist,
        totalAmount,
        setTotalAmount,
        count,
        setCount,
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
