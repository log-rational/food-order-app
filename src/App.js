import "./App.css";
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";
import Cart from "./Components/Cart/Cart";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <main>
        <Meals></Meals>
      </main>
      <Cart></Cart>
    </div>
  );
}

export default App;
