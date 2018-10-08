import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

import List from "./components/List";

import { sampleIndividualData } from "./utils/sampleData.js";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("renders the List", () => {
  const div = document.createElement("div");
  ReactDOM.render(<List data={sampleIndividualData} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
