import React from "react";
import logo from "./logo.svg";
import "./App.css";
import MyClassComponent from "./MyClassComponent";
import { Router } from "@reach/router";
import ButtonComponent from "./buttonComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <ButtonComponent path="/" />
          <MyClassComponent path="/another" />
        </Router>
      </header>
    </div>
  );
}

export default App;
