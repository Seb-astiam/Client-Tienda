import React from "react";

const Card = ({ product }) => {
  console.log("first", product);
  const { id, name, price, brand, type, color, genre, Stocksizes } = product;
  return (
    <div>
      <h1>{name}</h1>
      <h2>{brand}</h2>
      <h2>{genre}</h2>
    </div>
  );
};

export default Card;
