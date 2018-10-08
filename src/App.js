import React, { Component } from "react";

import List from "./components/List";

import "./styles/app.scss";

const ZYPER_URL = "https://fe-test-zyper-engagement.herokuapp.com";

const sampleData = {
  "0": {
    "output": {
      "Average Comments": "4562.8",
      "Average Engagement (per post as % of followers)": "1.2",
      "Average Engagement per post": "175426.2",
      "Average Likes": "170863.3",
      "Average Video Views": "0.0",
      "Bio": "",
      "Counted posts": 12,
      "Followers": 15002740,
      "Following": 0,
      "Number of Hashtags": "6.0",
      "Total Engagement": "2105114.0",
      "username": "oprah"
    }
  }
}

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: null,
      // data: null,
      data: sampleData,
      individual: false,
      usernames: "",
    };
  }

  handleToggleIndividual = () => {
    this.setState(({individual}) => ({
      individual: !individual,
    }))
  }

  handleUsernames = (event) => {
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
        this.setState({ data });
      })
      .catch((error) => {
        this.setState({ error });
      });
  }

  render() {
    return (
      <div className="app">
        <div className="form">
          <textarea
            name="usernames"
            onChange={this.handleUsernames}
          />
          <input
            defaultValue={false}
            name="individual"
            onChange={this.handleToggleIndividual}
            type="checkbox"
          />
          <button onClick={this.handleGetData}>Submit</button>
        </div>
        <List data={this.state.data} />
      </div>
    );
  }
}

export default App;
