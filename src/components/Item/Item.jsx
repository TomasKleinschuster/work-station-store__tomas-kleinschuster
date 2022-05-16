import React from "react";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";

const Item = ({ id, category, title, memory, price, imageURL, stock }) => {
  return (
    <div className="item-container">
      <span className="mb-2 font-bold">{title}</span>
      <img
        src={imageURL}
        alt={title}
        className="h-56 w-64 mb-2 p-2 object-contain border-2 border-gray-800 rounded bg-white hover:cursor-pointer"
      />
      <span className="mb-2 text-2xl font-bold">
        $ {price}
        <span className="text-base align-text-top">,99</span>
      </span>
      <span className="mb-2">Available stock: {stock}</span>
      <ItemCount stock={stock} initial={1} onAdd={""} />
      <Link to={"/item/" + id}>
        <span>Details</span>
      </Link>
    </div>
  );
};

export default Item;
