import React, { useContext } from "react";
import "./App.css";
import Layout from "./Layout";
import Basket from "./Assets/initialState";
import { BasketProvider } from "./BasketContext";

function App() {
  return (
    <BasketProvider value={123}>
      <div className="App">
        <header className="App-header">
          <Layout name={Basket} />
        </header>
      </div>
    </BasketProvider>
  );
}

export default App;