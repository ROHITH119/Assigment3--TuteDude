import { useState } from "react";
import "./App.css";
import Navbar from "./Navbar";
import Shoes from "./Shoes";
import Cart from "./Cart";

function App() {
  const [cartShoe, setCartShoe] = useState([]);

  const handleAddToCart = (shoe) => {
    setCartShoe((prev) => [...prev, shoe]);
    console.log("Added to cart:", shoe);
  };

  return (
    <div className="h-dvh w-dvw bg-zinc-900 text-white font-serif">
      <Navbar />
      <div className="grid grid-cols-3 justify-around  bg-zinc-900 ">
        <Shoes onAddToCart={handleAddToCart} />
        <Cart cartItems={cartShoe} />
      </div>
    </div>
  );
}

export default App;
