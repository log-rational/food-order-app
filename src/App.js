import React, { useContext } from "react";
import "./App.css";
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";
import Cart from "./Components/Cart/Cart";
import CartContext from "./store/store";

function App() {
  const ctx = useContext(CartContext);
  console.log(ctx);
  return (
    <div className="App">
      <Header></Header>
      <main>
        <Meals></Meals>
      </main>
      Cart
      {ctx.isOpen && <Cart></Cart>}
    </div>
  );
}

export default App;
