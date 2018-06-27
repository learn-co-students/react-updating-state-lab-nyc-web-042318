// Code YouTubeDebugger Component Here
import React from 'react'

class YouTubeDebugger extends React.Component {
    constructor(){
        super()

        this.state = {
             errors: [], 
             user: null, 
             settings: { 
                 bitrate: 8, video: { resolution: '1080p' } 
            } 
        }
    }

    clickHandler1 = () => {        
        this.setState({
            settings: {
                ...this.state.settings, 
                bitrate: 12,
            },
        })
    }

    clickHandler2 = () => {        
        this.setState({
            settings: {
                ...this.state.settings,
                video: {
                    resolution: '720p'
                }
            },
        })
    }

    
   

    render () {
        return (
            <div>
                <label htmlFor=""></label>
                <button  className="bitrate" onClick={this.clickHandler1}>Bitrate: {this.state.settings.bitrate}</button>
               
                <button className="resolution" 
                  onClick={this.clickHandler2} 
                >
                 Change Resolution - Resolution 
                 {this.state.settings.video.resolution}
                </button>
            </div>
        )
    }
}

export default YouTubeDebugger