import React from "react";
import Item from "../Item/Item";

const ItemList = ({ products }) => {
  // console.table(products); // Products table visualization in the console
  return (
    <div className="itemList-container">
      {products.map((product) => {
        return (
          <Item
            key={product.id}
            id={product.id}
            category={product.category}
            title={product.title}
            memory={product.memory}
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
