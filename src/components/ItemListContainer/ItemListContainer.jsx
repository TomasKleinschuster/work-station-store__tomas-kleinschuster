import React, { useEffect, useState } from "react";
import ButtonCounter from "../Buttons/ButtonCounter";
import ItemList from "../ItemList/ItemList";
import getItemListData from "../../Services/getItemListData";

function ItemListContainer({ greeting }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getItemListData
      .then((res) => setProducts(res))
      .catch((err) => console.log("error: ", err));
  }, []);

  return (
    <div className="itemListContainer-container">
      <h1 className="font-extrabold text-5xl text-white mb-6 mt-8">
        {greeting}
      </h1>
      <ItemList products={products} />
      <ButtonCounter title="Number of clicks: " classText="buttonCounter" />
    </div>
  );
}

export default ItemListContainer;
