import React, { Component } from "react";
import { FormGroup, FormControl, InputGroup, Glyphicon } from "react-bootstrap";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ""
    };
  }

  search() {
    console.log("Target:", this.state);
  }

  render() {
    return (
      <div className="App">
        <div className="App-tittle">Music master</div>
        <FormGroup>
          <InputGroup>
            <FormControl
              type="text"
              placeholder="Enter your artist"
              value={this.props.query}
              onChange={event => {
                this.setState({ query: event.target.value });
              }}
              onKeyPress={event => {
                if (event.key === "Enter") {
                  this.search();
                }
              }}
            />
            <InputGroup.Addon onClick={() => this.search()}>
              <Glyphicon glyph="search" />
            </InputGroup.Addon>
          </InputGroup>
        </FormGroup>
        <div className="Profile">
          <div>Artist Picture</div>
          <div>Artist Name</div>
        </div>
        <div className="Gallery">
          <div>gallery</div>
        </div>
      </div>
    );
  }
}

export default App;
