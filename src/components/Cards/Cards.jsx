import React from "react";
import Card from "../Card/Card";

const Cards = ({ arrProducts }) => {
  // console.log("pro", props);
  return (
    <div className="w-screen flex flex-wrap overflow-y-auto">
      {arrProducts.map((product, index) => (
        <Card product={product} key={index} />
      ))}
    </div>
  );
};

export default Cards;
