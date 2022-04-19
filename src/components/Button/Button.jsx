import React from "react";


/* TEST BUTTON */

const Button = ({title, message, classText}) => {
  /* Test Handler Function (Arrow Function) */
  /* const NavBar = (props) => {} */

  /* Test Handler Function */
  function HandleButton() {
    console.log(message);
  }
  return (
    <button onClick={() => HandleButton()} className={classText}>
      {title}
    </button>
  );
};

export default Button;
