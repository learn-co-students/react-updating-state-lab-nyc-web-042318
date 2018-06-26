import React from 'react';

class YouTubeDebugger extends React.Component {
  constructor() {
    super()

    this.state = { errors: [],
          user: null,
          settings:
            { bitrate: 8,
              video: { resolution: '1080p' }
            }
    }
  }

  updateBitrate = () => {
    this.setState({
        ...this.state,
        settings: {
          ...this.state.settings,
          bitrate: 12
        }
    })
  }

  updateResolution = () => {
    this.setState({
        ...this.state,
        settings: {
          ...this.state.settings,
          video: { resolution: '720p' }
        }
    })
  }

  render() {
    return(
      <div>
        <button className="bitrate" onClick={this.updateBitrate}/>
        <button className="resolution" onClick={this.updateResolution}/>
      </div>
    )
  }
}

export default YouTubeDebugger;
