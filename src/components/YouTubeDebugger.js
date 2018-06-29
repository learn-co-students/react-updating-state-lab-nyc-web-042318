// Code YouTubeDebugger Component Here
import React, { Component } from 'react'

class YouTubeDebugger extends Component {
  constructor() {
    super()
    this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: { resolution: '1080p' }
      }
    }
  }

  changebit = () => {
    this.setState(
      {settings: Object.assign({}, this.state.settings, {
        bitrate: 12
        }
      )}
    )
  }

  changeres = () => {
    this.setState(
      {settings: Object.assign({}, this.state.settings, {
        video: Object.assign({}, this.state.settings.video, {
          resolution: '720p'
        })
      })}
    )
  }

  render() {
    return (
      <div>
        <button className="bitrate" onClick={this.changebit}>Bit</button>
        <button className="resolution" onClick={this.changeres}>Res</button>
      </div>
    )
  }
}

export default YouTubeDebugger;
