import React, { Component } from "react";

import List from "./components/List";

import { sampleIndividualData } from "./utils/sampleData.js";

import "./styles/app.scss";

const ZYPER_URL = "https://fe-test-zyper-engagement.herokuapp.com";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: null,
      // data: null,
      data: sampleIndividualData,
      individual: false,
      usernames: "",
    };
  }

  handleToggleIndividual = () => {
    this.setState(({individual}) => ({
      error: null,
      individual: !individual,
    }))
  }

  handleUsernames = (event) => {
    this.setState({
      error: null,
      usernames: event.target.value,
    })
  }

  handleGetData = () => {
    const usernames = this.state.usernames
      // split usernames at the comma
      .split(",")
      // filter out empty strings
      .filter(u => u);

    // if we have usernames
    if (usernames.length) {
      // fetch data about each username
      const options = {
        method: "POST",
        mode: "no-cors",
        body: JSON.stringify({
          username: usernames.join(","),
          individual: this.state.individual,
        })
      };

      fetch(`${ZYPER_URL}/start`, options)
        .then(response => response.json())
        .then((res) => {
          this.handleGetJob(res);
        })
        .catch((error) => {
          this.setState({ error });
        });
    } else {
      this.setState({
        error: { message: "Please supply at least one username" },
      })
    }
  }

  handleGetJob = (jobID) => {
    fetch(`${ZYPER_URL}/results/${jobID}`)
      .then(response => response.json())
      .then((res) => {
        const { data } = res;
        this.setState({
          data,
          error: null,
        });
      })
      .catch((error) => {
        this.setState({ error });
      });
  }

  render() {
    const { error, data } = this.state;
    return (
      <div className="app">
        <div className="form">
          {error && <p className="error">{error.message}</p>}
          <textarea
            name="usernames"
            onChange={this.handleUsernames}
          />
          <div className="bottom">
            <input
              className="checkbox"
              defaultValue={false}
              name="individual"
              onChange={this.handleToggleIndividual}
              type="checkbox"
            />
            <p className="label">list individually?</p>
            <button onClick={this.handleGetData}>Submit</button>
          </div>
        </div>
        <List data={data} />
      </div>
    );
  }
}

export default App;
