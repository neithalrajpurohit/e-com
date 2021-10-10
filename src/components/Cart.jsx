import { useCart } from "../cartcontext";
import { useState } from "react";
import { Checkout } from "./Checkout";
export const Cart = () => {
  const { cartitems, setCartitems } = useCart();
  const [count, setCount] = useState(0);

  function deleteHandler(items) {
    setCartitems((prevValue) =>
      prevValue.filter((product) => product !== items)
    );
  }
  return (
    <div className="card-row">
      {cartitems.map((items) => (
        <div className="card">
          <img src={items.image} alt="images" style={{ width: "230px" }} />
          <h1>{items.brandnName}</h1>
          <p>
            <strong>Rs. {items.offeredPrice}</strong>
          </p>
          <div>{items.description}</div>
          <div>
            <button
              onClick={() => setCount((count) => count + 1)}
              className="btn btn-outline-primary"
            >
              +
            </button>
            {count}
            <button
              onClick={() => setCount((count) => count - 1)}
              className="btn btn-outline-primary"
            >
              -
            </button>
          </div>
          <button
            onClick={() => deleteHandler(items)}
            className="btn btn-outline-primary"
          >
            Delete
          </button>
        </div>
      ))}
      <div>
        <Checkout />
      </div>
    </div>
  );
};
