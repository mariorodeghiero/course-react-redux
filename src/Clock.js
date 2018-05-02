import React, { Component } from "react";
import "./App.css";

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    };
  }

  getTimeUntil(deadLine) {
    const time = Date.parse(deadLine) - Date.parse(new Date());
    const seconds = Math.floor((time / 1000) % 60);
    const minutes = Math.floor((time / 1000 / 60) % 60);
    const hours = Math.floor((time / (1000 * 60 * 60)) % 60);
    const days = Math.floor((time / (1000 * 60 * 60 * 24)) % 60);
    console.log(
      "Seconds:",
      seconds,
      "minutes:",
      minutes,
      "hours:",
      hours,
      "days:",
      days
    );
  }
  render() {
    this.getTimeUntil(this.props.deadLine);
    return (
      <div>
        <div className="Clock-days">{this.state.days} days</div>
        <div className="Clock-hours">{this.state.hours} hours</div>
        <div className="Clock-minutes">{this.state.minutes} minutes</div>
        <div className="Clock-seconds">{this.state.seconds} seconds</div>
      </div>
    );
  }
}

export default Clock;
