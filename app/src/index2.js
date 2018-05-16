import { observable, computed } from "mobx";
import { observer } from "mobx-react";
import React, { Component } from "react";

const appState = observable({ count: 0 });
// why this not refresh !!!
// var appState = {
//   count: 0
// };
appState.increment = function() {
  this.count++;
};
appState.decrement = function() {
  this.count--;
};
@observer
class Count extends Component {
  handleInc() {
    appState.increment();
  }
  handleDec() {
    appState.decrement();
  }
  render() {
    return (
      <div>
        count:{appState.count} <br />
        <button onClick={this.handleInc}>+</button>
        <button onClick={this.handleDec}>-</button>
      </div>
    );
  }
}

export default Count;
