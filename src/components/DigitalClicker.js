// Code DigitalClicker Component Here
import React from 'react';

class DigitalClicker extends React.Component {
    state = {
        timesClicked: 0
    };

    buttonClick = () => {
        this.setState({timesClicked: ++this.state.timesClicked})
    }

    render() {
        return (
            <button onClick={this.buttonClick}>{this.state.timesClicked}</button>
        )
    }
}

export default DigitalClicker;