import React from "react";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

function App() {
  return (
    <div className="w-screen h-auto bg-gray-600 back">
      <NavBar />
      <ItemListContainer greeting="Welcome!" />
    </div>
  );
}

export default App;
