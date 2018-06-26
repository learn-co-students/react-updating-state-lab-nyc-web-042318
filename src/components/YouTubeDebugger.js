// Code YouTubeDebugger Component Here
import React from 'react'

class YouTubeDebugger extends React.Component {
  constructor(props) {
    super(props);

    this.state={
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: '1080p'
        }
      }
    }
  }

  bitrateClick = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        bitrate: 12,
      }
    }, () => {console.log(this.state.settings.bitrate)})
  }

  resolutionClick = () => {
    this.setState({
      settings: {...this.state.settings,
      video: {resolution: '720p'},
      }
    })
  }

  render() {
    return (
      <div>
        <button className="bitrate" onClick={this.bitrateClick}>Click For BitRate!</button>
        <button className="resolution" onClick={this.resolutionClick}>Click for Resolution!</button>
      </div>
    )
  }
}

export default YouTubeDebugger;
