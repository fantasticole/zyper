import React, { Component } from "react";

import List from "./components/List";

import "./styles/app.scss";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: null,
      data: null,
      usernames: "",
    };
  }

  handleChange = (event) => {
    this.setState({
      usernames: event.target.value,
    })
  }

  handleGetData = () => {
    const usernames = this.state.usernames
      // split usernames at the comma
      .split(",")
      // filter out empty strings
      .filter(u => u);
    console.log({ usernames })
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
