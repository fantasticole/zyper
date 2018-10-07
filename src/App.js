import React, { Component } from "react";

import List from "./components/List";

import "./styles/app.scss";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: null,
      data: null,
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    console.log({ name })
    console.log({ value })
  }

  handleGetData = () => {
    console.log("handleGetData")
  }

  render() {
    return (
      <div className="app">
        <div className="form">
          <textarea
            name="usernames"
            onChange={this.handleChange}
          />
          <button onClick={this.handleGetData}>Submit</button>
        </div>
        <List data={this.state.data} />
      </div>
    );
  }
}

export default App;
