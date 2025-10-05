import React from "react";

const ShoeCard = (props) => {
  return (
    <div
      key={props.index}
      className="bg-red-400 text-white mt-5 p-5 shadow shadow-md flex flex-col justify-center items-center gap-2 hover:shadow-red-100 transition-all duration-300 ease-in-out rounded-md"
    >
      <img src={props.image} className="size-fit" alt={props.image}></img>
      <p className="text-2xl">{props.name}</p>
      <p>Price: {props.price} /-</p>
      <button
        className="bg-amber-400 p-2 border-4 border-amber-300 rounded-md hover:border-amber-500 transition-all duration-300 cursor-pointer ease-in-out text-white"
        onClick={() => props.onAddToCart(props)}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ShoeCard;
