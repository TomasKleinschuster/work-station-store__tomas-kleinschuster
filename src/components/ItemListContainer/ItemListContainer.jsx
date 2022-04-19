import React from "react";

function ItemListContainer({ greeting }) {
  return (
    <div className="flex flex-col text-center my-4 font-extrabold text-3xl text-white">
      {greeting}
    </div>
  );
}

export default ItemListContainer;
