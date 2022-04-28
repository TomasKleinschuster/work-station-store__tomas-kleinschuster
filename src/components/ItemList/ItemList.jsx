import React from "react";
import Item from "../Item/Item";

const ItemList = ({ products }) => {
  console.table(products); // Products table visualization in the console
  return (
    <div className="itemList-container">
      {products.map((product) => {
        return (
          <Item
            key={product.id}
            type={product.type}
            title={product.title}
            description={product.description}
            price={product.price}
            imageURL={product.imageURL}
            stock={product.stock}
          />
        );
      })}
    </div>
  );
};

export default ItemList;
