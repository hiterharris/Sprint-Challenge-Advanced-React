import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { render } from "@testing-library/react";
import PlayerList from './components/PlayerList';
import data from '../../data.js';

test("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
});

test("renders has data", () => {
  const div = document.createElement("div");
  ReactDOM.render(<PlayerList player={data} />, div);
});




