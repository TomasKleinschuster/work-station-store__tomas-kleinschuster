import React, { useState } from "react";
import { RiAddCircleLine, RiIndeterminateCircleLine } from "react-icons/ri";

const ItemCount = ({ stock, initial, onAdd }) => {
  const [count, setCount] = useState(initial);

  const plusHandler = () => {
    const newValue = count + 1;
    if (newValue <= stock) {
      setCount(newValue);
    }
  };

  const minusHandler = () => {
    const newValue = count - 1;
    if (newValue > 0) {
      setCount(newValue);
    }
  };

  const addHandler = () => {
    alert(
      count > 1
        ? count + " items added to the cart!"
        : count + " item added to the cart!"
    );
  };

  return (
    <>
      <div className="container_minus-plus">
        <RiIndeterminateCircleLine
          className="button_minus-plus"
          onClick={() => minusHandler()}
        />
        <span className="select-none text-xl">{count}</span>
        <RiAddCircleLine
          className="button_minus-plus"
          onClick={() => plusHandler()}
        />
      </div>
      <button
        className="button_addToCart"
        onClick={() => addHandler() && onAdd(count)}
      >
        Add to cart
      </button>
    </>
  );
};

export default ItemCount;
