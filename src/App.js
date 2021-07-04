import React, { useContext } from "react";
import "./App.css";
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";
import Cart from "./Components/Cart/Cart";
import CartContext from "./store/store";
import CartProvider from "./store/CartProvider";

function App() {
  const ctx = useContext(CartContext);
  return (
      <div className="App">
        {ctx.isOpen && <Cart></Cart>}
        <Header></Header>
        <main>
          <Meals></Meals>
        </main>
      </div>
  );
}

export default App;
