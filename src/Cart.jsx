import React, { useEffect, useState } from "react";

const Cart = ({ cartItems }) => {
  const [quantities, setQuantities] = useState({});
  const [total, setTotal] = useState(0);

  // Initialize quantities without resetting existing ones
  useEffect(() => {
    setQuantities((prevQuantities) => {
      const updatedQuantities = { ...prevQuantities };
      cartItems.forEach((item) => {
        if (!(item.name in updatedQuantities)) {
          updatedQuantities[item.name] = 1;
        }
      });
      return updatedQuantities;
    });
  }, [cartItems]);

  // Calculate total
  useEffect(() => {
    const newTotal = cartItems.reduce((sum, item) => {
      const qty = quantities[item.name] || 1;
      return sum + item.price * qty;
    }, 0);
    setTotal(newTotal);
  }, [cartItems, quantities]);

  const handleQuantityChange = (itemName, delta) => {
    setQuantities((prev) => {
      const newQty = Math.max((prev[itemName] || 1) + delta, 1);
      return { ...prev, [itemName]: newQty };
    });
  };

  return (
    <div className="col-span-1 p-10 font-serif">
      <div className="text-3xl mt-15">Cart</div>
      <div className="text-2xl mt-5">
        {cartItems.length === 0 ? (
          <div>Your cart is empty.</div>
        ) : (
          <ul className="space-y-4">
            {cartItems.map((item, index) => (
              <li
                key={index}
                className="bg-blue-300 text-black p-2 rounded flex flex-wrap items-center gap-4"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 rounded-2xl"
                />
                <div className="flex-1">
                  {item.name} — {item.price} /-
                </div>
                <div className="flex items-center gap-2">
                  <button
                    className="bg-red-500 text-white px-2 rounded"
                    onClick={() => handleQuantityChange(item.name, -1)}
                  >
                    -
                  </button>
                  <span>{quantities[item.name]}</span>
                  <button
                    className="bg-green-500 text-white px-2 rounded"
                    onClick={() => handleQuantityChange(item.name, 1)}
                  >
                    +
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
        <div>__________</div>
        <div className="mt-2 font-bold">Total: {total} /-</div>
      </div>
    </div>
  );
};

export default Cart;
