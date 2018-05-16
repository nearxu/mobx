import { observable, computed, action } from "mobx";
import { observer } from "mobx-react";
import React, { Component } from "react";
class Store {
  @observable num = 8;
  @computed
  get price() {
    return this.num * 100;
  }
}

var store = new Store();

@observer
class App extends Component {
  //   handleClick() {
  //     store.num = Math.random();
  //   }
  @action
  handleClick = () => {
    store.num = Math.random();
  };
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>test</button>
        <h1>{store.price}</h1>
      </div>
    );
  }
}

export default App;
