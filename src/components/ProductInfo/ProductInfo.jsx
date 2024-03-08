import React from "react";
import noShoe from "../../assets/noShoe.png";
const ProductInfo = ({ product }) => {
  const { name, price, brand, type, color, genre, image } = product;

  const genero = (genre) => {
    if (genre === "unisex") return "Calzado unisex";
    if (genre === "male") return "Calzado masculino";
    if (genre === "female") return "Calzado femenino";
  };
  return (
    <div className="w-screen flex flex-row pt-10 px-5 pb-5 justify-evenly">
      <div className="w-1/2 shadow h-auto">
        <img src={image || noShoe} alt="" />
      </div>
      <div className="ml-10 bg-white w-5/12 p-10 shadow">
        <h1 className="text-5xl font-bold mb-10">{name}</h1>
        <div className="pb-10 mb-10 border-grey">
          <h1 className="text-5xl font-semibold pb-20 mb-10 border-b border-grey">{`$${price}`}</h1>
          <h2 className="text-4xl font-semibold mb-10">{`Marca: ${brand}`}</h2>
          <h2 className="text-4xl font-semibold mb-10">{`Tipo: ${type}`}</h2>
          <h2 className="text-4xl font-semibold mb-10">{`Color: ${color}`}</h2>
          <h2 className="text-4xl font-semibold mb-10">{`${genero(genre)}`}</h2>
        </div>
        <div>
          <h2 className="text-xl">Talles disponibles:</h2>
          <div className="text-6xl">TALLES</div>
          <div className="flex justify-center items-center h-28 mt-10 ">
            <button
              className="text-white text-3xl w-1/2 bg-black h-28 rounded-md hover:bg-yellow hover:text-black active:border-black active:border-4"
              onClick={() => alert("Deme dinero")}
            >
              Comprar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
