import React, { Component } from "react";
import "./App.css";
import Clock from "./Clock";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deadLine: "December 25, 2018.",
      newDeadLine: ""
    };
  }

  changeDeadLine() {
    this.setState({ deadLine: this.state.newDeadLine });
  }

  render() {
    return (
      <div className="App">
        <div className="App-title">Countdown to {this.state.deadLine}</div>
        <Clock deadLine={this.state.deadLine} />
        <div>
          <input
            placeholder="enter your date..."
            onChange={event =>
              this.setState({ newDeadLine: event.target.value })
            }
          />
          <button onClick={() => this.changeDeadLine()}>Submit</button>
        </div>
      </div>
    );
  }
}

export default App;
