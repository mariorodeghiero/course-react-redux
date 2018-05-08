import React, { Component } from 'react';

class Gallery extends Component {
    state = {  }

    playAudio(previewUrl){
        let audio = new Audio(previewUrl);
        audio.play()
    }

    render() {
        const { tracks } = this.props;
        return (
            <div>
                {tracks.map((track, index) => {
                    const trackImg = track.album.images[0].url;
                    return(
                        <div key={index} className="track" onClick={() => this.playAudio(track.preview_url)}>
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