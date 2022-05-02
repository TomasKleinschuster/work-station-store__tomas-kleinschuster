import React from "react";
import ItemCount from "./ItemCount";

const Item = ({ key, type, title, description, price, imageURL, stock }) => {
  return (
    <div className="item-container">
      <span className="mb-2 font-bold">{title}</span>
      <img
        src={imageURL}
        alt={description}
        className="h-56 mb-2 p-2 object-contain border-2 border-gray-800 rounded bg-white"
        onClick={() => {console.log({key})}}
      />
      <span className="mb-2 text-2xl font-bold">
        $ {price}
        <span className="text-base align-text-top">,99</span>
      </span>
      <span className="mb-2">Available stock: {stock}</span>
      <ItemCount stock={stock} initial={1} />
    </div>
  );
};

export default Item;
