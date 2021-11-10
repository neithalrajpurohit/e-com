import { useCart } from "../context/cartcontext";
import { useNavigate } from "react-router";

export const Wishlist = () => {
  const navigate = useNavigate();
  const { wishlist, setWishlist, setCartitems } = useCart();

  return (
    <div className="card-row">
      {wishlist.map((items) => (
        <div className="card">
          <img src={items.image} alt="images" style={{ width: "230px" }} />
          <h1>{items.brandnName}</h1>
          <p>
            <strong>Rs. {items.offeredPrice}</strong>
          </p>
          <div>{items.description}</div>
          <button
            onClick={() => {
              navigate("/cart");
              setCartitems((products) => [...products, items]);
              setWishlist((prevValue) =>
                prevValue.filter((item) => item !== items)
              );
            }}
            className="btn btn-outline-primary"
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};
