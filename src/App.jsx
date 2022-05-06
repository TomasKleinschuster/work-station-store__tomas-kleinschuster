import React from "react";
import NavBar from "./components/NavBar/NavBar";
import ItemDetailContainer from "./Pages/ItemDetailContainer/ItemDetailContainer";
import { Routes, Route } from "react-router-dom";
import ItemListContainer from "./Pages/ItemListContainer/ItemListContainer";

function App() {
  return (
    <div className="w-auto min-h-screen h-full bg-gray-600">
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer greeting="Welcome!" />} />
        <Route path="/category/:categoryId" element={<ItemListContainer />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
      </Routes>
    </div>
  );
}

export default App;
