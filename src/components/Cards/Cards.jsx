import React from "react";
import Card from "../Card/Card";

const Cards = ({ arrProducts }) => {
  // console.log("pro", props);
  return (
    <div>
      {arrProducts.map((product, index) => (
        <Card product={product} key={index} />
      ))}
    </div>
  );
};

export default Cards;
