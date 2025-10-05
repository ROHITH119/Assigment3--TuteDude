import React from "react";
import ShoeCard from "./ShoeCard";

const Shoes = ({ onAddToCart }) => {
  const [shoeArr, setShoeArr] = React.useState([
    { image: "shoe1.png", price: 3000, name: "casual sneaker" },
    {
      image: "shoe2.png",
      price: 3500,
      name: "two-tone beige and white sneaker",
    },
    {
      image: "shoe3.jpg",
      price: 5200,
      name: "red canvas high-top sneakers",
    },
    { image: "shoe4.jpg", price: 7800, name: "orange canvas sneaker" },
    {
      image: "shoe5.jpg",
      price: 9000,
      name: "nike high-top sneaker",
    },
    {
      image: "shoe6.jpg",
      price: 2000,
      name: "blue and white sneaker",
    },
  ]);

  return (
    <div className="col-span-2 p-10">
      <h3 className="mt-15 text-3xl">Available Shoes</h3>
      <div className="grid grid-cols-2 gap-5">
        {shoeArr.map((item, index) => (
          <ShoeCard
            key={index}
            image={item.image}
            price={item.price}
            name={item.name}
            onAddToCart={() => onAddToCart(item)}
          />
        ))}
      </div>
    </div>
  );
};

export default Shoes;
