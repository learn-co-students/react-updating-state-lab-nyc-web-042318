import React from "react";

class DigitalClicker extends React.Component {
  state = {
    timesClicked: 0
  }

  handleClick = () => {this.setState({
      timesClicked: ++this.state.timesClicked
  })
}
  render() {
    return (
      <button label={this.state.timesClicked} onClick={this.handleClick}>{this.state.timesClicked}</button>
    )
  }
}

export default DigitalClicker;
