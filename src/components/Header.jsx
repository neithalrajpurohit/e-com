import { Link, useNavigate } from "react-router-dom";
export const Header = () => {
  const navigate = useNavigate();
  return (
    <div style={{ position: "sticky", top: "0px", zIndex: "100" }}>
      <nav className="navigation">
        <h1 className="nav-brand" style={{ textAlign: "center" }}>
          My Cart
        </h1>
        <ul>
          <li>
            <Link to="/" className="items-link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/cart" className="items-link">
              Cart
            </Link>
          </li>
          <li>
            <Link to="/wishlist" className="items-link">
              Wishlist
            </Link>
          </li>
          <li>
            <button
              onClick={() => navigate("/Login")}
              className="btn btn-secondary"
            >
              Login
            </button>
          </li>
          <li>
            <button
              onClick={() => navigate("/Signin")}
              className="btn btn-secondary"
            >
              Sign in
            </button>
          </li>
        </ul>
      </nav>{" "}
    </div>
  );
};
