import React, { Component } from "react";

class Profile extends Component {
  state = {};
  render() {
    let artist = {
      name: "",
      followers: { total: "" },
      images: [{ url: "" }],
      genres: []
    };
    artist = this.props.artist !== null ? this.props.artist : artist;
    return (
      <div className="Profile">
        <img alt="Profile" className="profile-img" src={artist.images[0].url} />
        <div className="profile-info">
          <div className="profile-name">{artist.name}</div>
          <div className="profile-followers">{artist.followers.total}</div>
          <div className="profile-genrer">
            {artist.genres.map((genre, index) => {
              return <span key={index}> {genre} </span>;
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
