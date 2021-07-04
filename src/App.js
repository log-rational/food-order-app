import "./App.css";
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <main>
        <Meals></Meals>
      </main>
    </div>
  );
}

export default App;
