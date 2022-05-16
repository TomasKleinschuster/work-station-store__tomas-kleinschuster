import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import CartContext from "../../Context/cartContext";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ detail }) => {
  const [productsQuantity, setProductsQuantity] = useState(null);
  const myCartContext = useContext(CartContext);

  const addHandler = (quantityToAdd) => {
    myCartContext.addProduct(detail);
  };

  return (
    <div className="flex flex-row justify-center items-center w-2/3 my-4">
      <div className="flex flex-col w-1/2 justify-center items-center">
        <img
          src={detail.imageURL}
          alt=""
          className="object-contain h-72 p-4 border-2 rounded border-gray-800 bg-white"
        />
      </div>
      <div className="flex flex-col w-1/2 h-72 justify-evenly items-left text-left px-4">
        <span className="text-2xl font-bold">{detail.title}</span>
        <span className="flex flex-row items-center text-base font-semibold text-white">
          Category:{" "}
          <span className="font-bold text-lg pl-2 text-black">
            {detail.type}
          </span>
        </span>
        <span className="flex flex-row items-center text-base font-semibold text-white">
          Video Output:{" "}
          <span className="font-bold text-lg pl-2 text-black">
            {detail.videoOutput}
          </span>
        </span>
        <span className="flex flex-row items-center text-base font-semibold text-white">
          Memory:{" "}
          <span className="font-bold text-lg pl-2 text-black">
            {detail.memory}
          </span>
        </span>
        <span className="flex flex-row items-center text-base font-semibold text-white">
          Graphics:{" "}
          <img className="object-fill h-12 pl-2" src={detail.graphics} alt="" />
        </span>
        <span className="text-2xl font-bold">
          $ {detail.price}
          <span className="text-base align-text-top">,99</span>
        </span>
        <span className="flex flex-row items-center text-base font-semibold text-white">
          Available stock:{" "}
          <span className="font-bold text-lg pl-2 text-black">
            {detail.stock}
          </span>
        </span>
        {myCartContext.products.length ? (
          <button onClick={() => console.log(myCartContext)}>
            <Link to="/cart">Checkout ({productsQuantity} products)</Link>
          </button>
        ) : (
          <ItemCount stock={detail.stock} initial={1} onAdd={addHandler} />
        )}
      </div>
    </div>
  );
};

export default ItemDetail;
