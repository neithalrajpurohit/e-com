import allProducts from "../phoneDB";
import { useCart } from "../cartcontext";
import { useNavigate } from "react-router";

export const Home = () => {
  const navigate = useNavigate();
  const { setCartitems, setWishlist } = useCart();
  return (
    <>
      <div className="card-row">
        {allProducts.map((item) => (
          <div className="card">
            <img src={item.image} alt="images" style={{ width: "230px" }} />
            <h1>{item.brandnName}</h1>
            <div>{item.description}</div>
            <p className="lol">
              <strong>Rs. {item.offeredPrice}</strong>
            </p>{" "}
            <p className="suraj">Rs. {item.actualPrice}</p> (
            {Math.round(
              ((item.actualPrice - item.offeredPrice) / item.actualPrice) * 100
            )}
            % off)
            <div>
              <button
                onClick={() => {
                  navigate("/cart");
                  setCartitems((items) => [...items, item]);
                }}
                className="btn btn-outline-primary"
              >
                Add to Cart
              </button>
              <button
                onClick={() => {
                  navigate("/wishlist");
                  setWishlist((items) => [...items, item]);
                }}
                className="btn btn-outline-primary"
              >
                Add to Wishlist
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
