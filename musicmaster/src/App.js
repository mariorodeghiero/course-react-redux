import React, {Component} from "react";
import { FormGroup, FormControl, InputGroup, Glyphicon} from "react-bootstrap";
import "./App.css";
import {accessToken} from "./token";
import Profile from "./Profile";
import Gallery from './Gallery'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      artist: null,
      tracks: []
    };
  }

  search() {
    console.log("Target:", this.state);
    let url = `https://api.spotify.com/v1/search?q=${
      this.state.query
    }&type=artist&limit=1`;
    let albumUrl = 'https://api.spotify.com/v1/artists/';

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
        url = `${albumUrl}${artist.id}/top-tracks?country=BR`;
        fetch(url, myOptions)
          .then(response => response.json())
          .then(data => {
            const {tracks, albums, artist} = data;
            this.setState({tracks});
            console.log(data)
          })
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
                  <Gallery tracks={this.state.tracks}></Gallery>
            </div>
            : <div></div>
          }
      </div>
    );
  }
}

export default App;