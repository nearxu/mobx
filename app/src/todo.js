import { observer } from "mobx-react";
import React, { Component } from "react";

@observer
class TimerView extends Component {
  onReset() {
    this.props.appState.resetTimer();
  }
  render() {
    return (
      <button onClick={this.onReset.bind(this)}>
        {this.props.appState.timer}
      </button>
    );
  }
}

export default TimerView;
