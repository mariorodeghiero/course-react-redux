import React, {Component} from "react";
import { FormGroup, FormControl, InputGroup, Glyphicon} from "react-bootstrap";
import "./App.css";
import {accessToken} from "./token";
import Profile from "./Profile";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      artist: null
    };
  }

  search() {
    console.log("Target:", this.state);
    const url = `https://api.spotify.com/v1/search?q=${
      this.state.query
    }&type=artist&limit=1`;

    let myOptions = {
      method: "GET",
      headers: {
        Authorization: "Bearer " + accessToken
      },
      mode: "cors",
      cache: "default"
    };

    fetch(url, myOptions)
      .then(response => response.json())
      .then(data => {
        const artist = data.artists.items[0];
        this.setState({
          artist
        });
      });
  }

  render() {
    return ( 
    <div className = "App" >
      <div className = "App-tittle" > Music master </div> 
        <FormGroup >
          <InputGroup >
            <FormControl type = "text"
              placeholder = "Enter your artist"
              value = {
                this.props.query
              }
              onChange = {
                event => {
                  this.setState({
                    query: event.target.value
                  });
                }
              }
              onKeyPress = {
                event => {
                  if (event.key === "Enter") {
                    this.search();
                  }
                }
              }
            /> 
            <InputGroup.Addon onClick = {
              () => this.search()}>
              <Glyphicon glyph = "search" / >
            </InputGroup.Addon> 
          </InputGroup> 
        </FormGroup> 
        {
          this.state.artist !== null ? 
          <div>
              <Profile artist = {this.state.artist}/> 
                <div className = "Gallery" >
                   <div> gallery </div> 
                </div> 
          </div>
          : <div></div>
        }
      </div>
    );
  }
}

export default App;