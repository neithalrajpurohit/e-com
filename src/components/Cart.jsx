import { useCart } from "../cartcontext";
export const Cart = () => {
  const { cartitems, setCartitems } = useCart();
  function deleteHandler(items) {
    setCartitems((prevValue) =>
      prevValue.filter((product) => product !== items)
    );
  }
  return (
    <div>
      <h1>Welcome to cart page.</h1>
      {cartitems.map((items) => (
        <div>
          <img src={items.image} alt="images" />
          <h1>{items.brandnName}</h1>
          <div>{items.description}</div>
          <button onClick={() => deleteHandler(items)}>Delete</button>
        </div>
      ))}
    </div>
  );
};
