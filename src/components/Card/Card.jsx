import React from "react";

const Card = ({ product }) => {
  //console.log("first", product);
  const { id, name, price, brand, type, color, genre, image, Stocksizes } =
    product;
  return (
    <div className="bg-red-400 rounded border-8 border-yellow-400">
      <img src={image}></img>
      <h1 className="text-3xl font-bold underline text-center border-r-emerald-600">
        {name}
      </h1>
      <h2>{brand}</h2>
      <h2>{genre}</h2>
      <h3>${price}</h3>
    </div>
  );
};

export default Card;
