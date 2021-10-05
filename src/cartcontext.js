import { createContext, useContext, useState } from "react";
export const Cartcontext = createContext();

export function CartProvider({ children }) {
  const [cartitems, setCartitems] = useState([]);
  return (
    <Cartcontext.Provider
      value={{
        cartitems,
        setCartitems,
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
