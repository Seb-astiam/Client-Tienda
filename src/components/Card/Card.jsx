import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Card = ({ product }) => {
  const { id, name, price, brand, type, color, genre, image, Stocksizes } =
    product;

  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/detail/${id}`);
  };

  const [isFav, setIsFav] = useState(false);

  const favoritos = () => {
    if (isFav) {
      setIsFav(false);
    } else {
      setIsFav(true);
    }
  };

  return (
    <div
      className="flex flex-col justify-evenly items-center shadow-lg max-w-min h-96 bg-white relative"
      onClick={handleClick}
    >
      <div className="w-60 h-60 flex items-center justify-center m-2 shadow-md border relative">
        <img src={image} />

        {isFav ? (
          <button className="absolute top-2 right-3" onClick={favoritos}>
            ❤️
          </button>
        ) : (
          <button className="absolute top-2 right-3" onClick={favoritos}>
            🤍
          </button>
        )}
      </div>

      <div className="flex flex-col items-center m-1">
        <h2 className="font-mono max-w-[250px] truncate"> {name} </h2>

        <div className="flex justify-between w-36 bg-black p-1">
          <h2 className="text-white">{brand}</h2>
          <h2 className="text-white">{color}</h2>
        </div>

        <h3 className="font-sans">${price}</h3>

        <button
          className="bg-yellow border rounded p-1"
          onClick={(event) => event.stopPropagation()}
        >
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};

export default Card;
