import React from "react";
import Card from "../Card/Card";

const Cards = ({ arrProducts }) => {
  return (
    <div className="w-5/6 flex flex-wrap justify-items-center">
      {arrProducts.map((product, index) => (
        <Card product={product} key={index} />
      ))}
    </div>
  );
};

export default Cards;
