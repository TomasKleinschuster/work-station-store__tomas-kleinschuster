import React, { useState } from "react";

/* TEST BUTTON */

const ButtonCounter = ({ title, classText }) => {
  const [count, setCount] = useState(0);

  return (
      <button onClick={() => setCount(count + 1)} className={classText}>
        {title} {count}
      </button>
  );
};

export default ButtonCounter;
