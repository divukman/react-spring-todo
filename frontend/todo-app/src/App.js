import React, { Component } from "react";
import "./App.css";
import "./bootstrap.css";

import FirstComponent, {
  DummyComponent
} from "./components/learning-examples/FirstComponent";
import SecondComponent from "./components/learning-examples/SecondComponent";
import ThirdComponentNekoDrugoIme from "./components/learning-examples/ThirdComponent";
import FourthComponent from "./components/learning-examples/FourthComponent";

import Counter from "./components/counter/Counter";
import TodoApp from "./components/todo/TodoApp";

function App() {
  return (
    <div className="App">
      {
        //<Counter />
      }
      <TodoApp />
    </div>
  );
}

export default App;

class LearningComponents extends Component {
  render() {
    return (
      <div className="LearningComponents">
        <h1>Todo application</h1>
        <FirstComponent />
        <SecondComponent />
        <ThirdComponentNekoDrugoIme />
        <DummyComponent />
        <FourthComponent />
      </div>
    );
  }
}
