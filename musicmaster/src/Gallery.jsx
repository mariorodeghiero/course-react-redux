import React, { Component } from 'react';

class Gallery extends Component {
    state = {  }
    render() {
        const { tracks } = this.props;
        return (
            <div>
                {tracks.map((track, index) => {
                    const trackImg = track.album.images[0].url;
                    return(
                        <div key={index} className="track">
                            <img src={trackImg} className="track-img" alt="track"/>
                            <p className="track-img" alt="track"></p>
                        </div>
                    )
                })}
            </div>
        );
    }
}

export default Gallery;