import { useCart } from "../cartcontext";

export const TotalPrice = (cartitems) => {
  let { totalAmount, setTotalAmount } = useCart();
  let myTotalAmount = cartitems?.reduce(
    (acc, item) => acc + item.offeredPrice,
    0
  );
  setTotalAmount(myTotalAmount);
  return <div style={{ display: "inline" }}>{totalAmount}</div>;
};

export const Checkout = () => {
  let { cartitems } = useCart();
  return (
    <div
      className="card"
      style={{ width: "500px", marginleft: "1rem", padding: "1rem" }}
    >
      <h3 className="price-text">Price Details</h3>
      {cartitems.map(({ brandnName, offeredPrice, id }) => {
        return (
          <div key={id}>
            <div>
              <div>
                Item:<strong>{brandnName}</strong>
              </div>
              <div>
                Price:<strong> ₹ {offeredPrice * 1}</strong>
              </div>
            </div>
          </div>
        );
      })}

      <div>
        <h3>Total Amount = ₹{TotalPrice(cartitems)}</h3>
      </div>
      <button className="btn btn-outline-primary">Place Order</button>
    </div>
  );
};
