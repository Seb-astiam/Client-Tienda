import React from "react";
import Card from "../Card/Card";

const Cards = ({ arrProducts }) => {
  // console.log("pro", props);
  return (
    <div className="grid 2xl:grid-cols-6 xl:grid-cols-5  lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-2 justify-items-center">
      {arrProducts.map((product, index) => (
        <Card product={product} key={index} />
      ))}
    </div>
  );
};

export default Cards;
