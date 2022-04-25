import React, { useState } from "react";
import { RiAddCircleLine, RiIndeterminateCircleLine } from "react-icons/ri";

const ItemCount = ({ stock, initial }) => {
  const [count, setCount] = useState(initial);

  return (
    <div>
      <div className="item-count">
        <RiAddCircleLine
          className="ar-button"
          onClick={() => (count < stock ? setCount(count + 1) : "")}
        />
        <span className="select-none text-xl">{count}</span>
        <RiIndeterminateCircleLine
          className="ar-button"
          onClick={() => (count > initial ? setCount(count - 1) : "")}
        />
      </div>
      <button
        className="add-cart_button"
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
    </div>
  );
};

export default ItemCount;
