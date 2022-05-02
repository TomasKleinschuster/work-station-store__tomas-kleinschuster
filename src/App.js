import React from "react";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";

function App() {
  return (
    <div className="w-auto min-h-screen h-full bg-gray-600">
      <NavBar />
      <ItemListContainer greeting="Welcome!" />
      <ItemDetailContainer />
    </div>
  );
}

export default App;
