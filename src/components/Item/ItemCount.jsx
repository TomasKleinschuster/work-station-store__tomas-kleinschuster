import React, { useState } from "react";
import { RiAddCircleLine, RiIndeterminateCircleLine } from "react-icons/ri";

const ItemCount = ({ stock, initial }) => {
  const [count, setCount] = useState(initial);

  return (
    <>
      <div className="container_minus-plus">
        <RiIndeterminateCircleLine
          className="button_minus-plus"
          onClick={() => (count > initial ? setCount(count - 1) : "")}
        />
        <span className="select-none text-xl">{count}</span>
        <RiAddCircleLine
          className="button_minus-plus"
          onClick={() => (count < stock ? setCount(count + 1) : "")}
        />
      </div>
      <button
        className="button_addToCart"
        onClick={() =>
          alert(
            count > 1
              ? count + " items added to the cart!"
              : count + " item added to the cart!"
          )
        }
      >
        Add to cart
      </button>
    </>
  );
};

export default ItemCount;
