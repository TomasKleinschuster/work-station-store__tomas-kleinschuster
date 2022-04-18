import "./App.css";
import NavBar from "./components/NavBar/NavBar";

function App() {
  /* Spread Operator */
  const arrList = [1, 2, 3, 4, 5];
  console.log(...arrList);

  /* Propiedades dinámicas */
  const dinamicProp = "id";
  const numberList = {
    title: "NUMBER LIST",
    ["my-" + dinamicProp]: 1,
  };
  console.log(numberList);

  /* Deep Matching */
  const { a: val } = { a: 2 };
  console.log(val);

  /* Desestructuración */
  const [a = 1, b = 2, c = 3, d = 4] = [1, 2, 3];
  console.log(a + b + c + d);

  return (
    <div className="w-screen h-screen bg-gray-600 back">
      <NavBar />
    </div>
  );
}

export default App;
