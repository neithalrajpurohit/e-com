import { Routes } from "react-router";
import "./App.css";
import { Header } from "./components/Header";
import { Cart } from "./components/Cart";
import { Home } from "./components/Home";
import { Wishlist } from "./components/Wishlist";
import { Login } from "./components/Login";
import { useState } from "react";

function App() {
  // eslint-disable-next-line
  const [login, setLogin] = useState(true);
  return (
    <div>
      <Header />
      <Routes>
        <Routes path="/" element={<Home />} />
        {login && <Routes path="/cart" element={<Cart />} />}
        {login && <Routes path="/wishlist" element={<Wishlist />} />}
        {!login && <Routes path="/cart" element={<Login />} />}
        {!login && <Routes path="/wishlist" element={<Login />} />}
      </Routes>
    </div>
  );
}

export default App;
