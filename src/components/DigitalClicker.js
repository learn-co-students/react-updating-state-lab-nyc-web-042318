import React from 'react';

class DigitalClicker extends React.Component {
  constructor() {
    super()

    this.state = {
      timesClicked: 0
    }
  }

  whenClicked = () => {
    this.setState({
      timesClicked: this.state.timesClicked + 1
    })
  }

  render() {
    return(
      <div>
      <button onClick={this.whenClicked}>{this.state.timesClicked}</button>
      </div>
    )
  }
}

export default DigitalClicker;
