import React from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Button from "./components/Button/Button";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

function App() {
  return (
    <div className="w-screen h-screen bg-gray-600 back">
      <NavBar />
      <ItemListContainer greeting="Welcome!" />
      <Button title='Click me!' message="The Button with Props Works!" classText="button-test" />
    </div>
  );
}

export default App;

/* C2 */
/* Spread Operator */
// const arrList = [1, 2, 3, 4, 5];
// console.log(...arrList);

/* Propiedades dinámicas */
// const dinamicProp = "id";
// const numberList = {
//   title: "NUMBER LIST",
//   ["my-" + dinamicProp]: 1,
// };
// console.log(numberList);

/* Deep Matching */
// const { a: val } = { a: 2 };
// console.log(val);

/* Desestructuración */
// const [a = 1, b = 2, c = 3, d = 4] = [1, 2, 3];
// console.log(a + b + c + d);

/* C2 */
/* Fragment */
// <></>
// <React.Fragment></React.Fragment>
