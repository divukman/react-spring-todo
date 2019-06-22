import React, { Component } from "react";
import logo, { ReactComponent } from "./logo.svg";
import "./App.css";

import FirstComponent, {
  DummyComponent
} from "./components/learning-examples/FirstComponent";
import SecondComponent from "./components/learning-examples/SecondComponent";
import ThirdComponentNekoDrugoIme from "./components/learning-examples/ThirdComponent";

function App() {
  return (
    <div className="App">
      <h1>Todo application</h1>
      <FirstComponent />
      <SecondComponent />
      <ThirdComponentNekoDrugoIme />
      <DummyComponent />
    </div>
  );
}

export default App;
