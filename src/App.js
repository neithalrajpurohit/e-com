import { Routes } from "react-router";
import "./App.css";
import { Header } from "./components/Header";
import { Cart } from "./components/Cart";
import { Home } from "./components/Home";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Routes path="/" element={<Home />} />
        <Routes path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
