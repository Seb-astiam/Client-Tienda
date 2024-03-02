import React from "react";

const Card = ({ product }) => {
  //console.log("first", product);
  const { id, name, price, brand, type, color, genre, image, Stocksizes } = product;
  return (
    <div>
    <img src={image}></img>
      <h1>{name}</h1>
      <h2>{brand}</h2>
      <h2>{genre}</h2>
      <h3>${price}</h3>
    </div>
  );
};

export default Card;
