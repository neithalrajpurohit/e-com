import allProducts from "../phoneDB";
import { useCart } from "../cartcontext";

export const Home = () => {
  const { setCartitems } = useCart();
  return (
    <>
      <h1>Welcome to home page!</h1>
      {allProducts.map((item) => (
        <div>
          <img src={item.image} alt="images" />
          <h1>{item.brandnName}</h1>
          <div>{item.description}</div>
          <button onClick={() => setCartitems((items) => [...items, item])}>
            Add to Cart
          </button>
        </div>
      ))}
    </>
  );
};
