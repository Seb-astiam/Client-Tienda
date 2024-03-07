import React from "react";
import Card from "../Card/Card";

const Cards = ({ arrProducts }) => {
  return (
    <div className="flex flex-wrap gap-2 justify-items-center">
      {arrProducts.map((product, index) => (
        <Card product={product} key={index} />
      ))}
    </div>
  );
};

export default Cards;
