import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deadLine: "December 25, 2018."
    };
  }

  changeDeadLine() {
    this.setState({ deadLine: "November 14, 2018" });
  }

  render() {
    return (
      <div className="App">
        <div className="App-title">Countdown to {this.state.deadLine}</div>
        <div>
          <div className="Clock-days">12 days</div>
          <div className="Clock-hours">12 hours</div>
          <div className="Clock-minutes">12 minutes</div>
          <div className="Clock-seconds">12 seconds</div>
        </div>
        <div>
          <input placeholder="enter your date..." />
          <button onClick={() => this.changeDeadLine()}>Submit</button>
        </div>
      </div>
    );
  }
}

export default App;
