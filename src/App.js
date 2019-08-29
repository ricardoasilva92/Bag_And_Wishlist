import React from "react";
import "./App.css";
import Layout from "./components/Layout/Layout";
import { BasketProvider } from "./BasketContext";

function App() {
  return (
    <BasketProvider>
      <div className="App">
        <header className="App-header"/>
          <Layout />
      </div>
    </BasketProvider>
  );
}

export default App;