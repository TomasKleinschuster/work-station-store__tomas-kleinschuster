import React, { useEffect, useState } from "react";
import ButtonCounter from "../Buttons/ButtonCounter";
import ItemList from "../ItemList/ItemList";
import getItemListData from "../../Services/getItemListData";

function ItemListContainer({ greeting }) {
  const [products, setProducts] = useState([]);
  console.log("Products before promise ", products);

  useEffect(() => {
    getItemListData
      .then((res) => setProducts(res))
      .catch((err) => console.log("error: ", err));
  }, []);

  return (
    <div className="itemListContainer-container">
      <h1 className="font-extrabold text-3xl text-white my-4">{greeting}</h1>
      <ItemList products={products} />
      <ButtonCounter title="Number of clicks: " classText="buttonCounter" />
      <div className="w-10 h-10 bg-blue-600"></div>
      <div className="w-10 h-10 bg-black"></div>
      <div className="w-10 h-10 bg-gray-900"></div>
      <div className="w-10 h-10 bg-gray-800"></div>
      <div className="w-10 h-10 bg-gray-600"></div>
      <div className="w-10 h-10 bg-white"></div>
    </div>
  );
}

export default ItemListContainer;
