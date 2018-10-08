import React from "react";
import ReactDOM from "react-dom";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import App from "./App";

import List from "./components/List";

import { sampleIndividualData } from "./utils/sampleData.js";

configure({ adapter: new Adapter() });

describe("App component", () => {
  const wrapper = shallow(<App data={sampleIndividualData} />);

  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("individual should default to false", () => {
    expect(wrapper.state().individual).toBe(false);
  });

  it("usernames should default to an empty string", () => {
    expect(wrapper.state().usernames).toBe("");
  });

  it("should toggle individual value", () => {
    wrapper.instance().handleToggleIndividual();
    expect(wrapper.state().individual).toBe(true);
  });

  it("should update usernames", () => {
    const usernames = "oprah, ellen, obama";
    const event = {
      target: {
        value: usernames,
      }
    }
    wrapper.instance().handleUsernames(event);
    expect(wrapper.state().usernames).toBe(usernames);
  });
});

describe("List component", () => {
  it("renders a List", () => {
    const div = document.createElement("div");
    ReactDOM.render(<List data={sampleIndividualData} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});