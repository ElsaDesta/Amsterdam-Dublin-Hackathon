import React from "react";
import "./App.css";
import { Router, Route, Switch } from "react-router";
import Header from "./component/header/Header";
import "./stylesheets/global.scss";
import Highlight from "./component/highlights/Highlights";

function App() {
  return (
    <div className="App">
      <Header />
      <Highlight />
    </div>
  );
}

export default App;
