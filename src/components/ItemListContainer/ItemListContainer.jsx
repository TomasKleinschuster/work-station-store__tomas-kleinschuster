import React from "react";
import ItemCount from "../Buttons/ItemCount";
import ButtonCounter from "../Buttons/ButtonCounter";

function ItemListContainer({ greeting }) {
  return (
    <div className="flex flex-col items-center h-auto text-center my-4 font-extrabold text-3xl text-white">
      {greeting}
      <div className="box-item"></div>
      <ItemCount stock={10} initial={1} />
      <ButtonCounter title="Number of clicks: " classText="button-test" />
    </div>
  );
}

export default ItemListContainer;
