import React, { Component } from "react";
import { Provider, connect } from "react-redux";
import { createStore, applyMiddleware } from "redux";

// type
const add = "ADD";
const decrease = "DECREASE";

// creater
const increase = () => ({ type: add });
const decreaseCount = () => ({ type: decrease });

// reducer
const reducer = (state = 0, action) => {
  switch (action.type) {
    case add:
      return ++state;
    case decrease:
      return --state;
    default:
      return state;
  }
};

const store = createStore(reducer);

// view
const Counter = ({ count, dispatch }) => (
  <div>
    <button onClick={() => dispatch(increase())}>+</button>
    <button onClick={() => dispatch(decreaseCount())}>-</button>
    <button onClick={() => dispatch(decreaseCount())}>- </button>
    <div>{count}</div>
  </div>
);

const mapStateToProps = store => ({ count: store });

const Container = connect(mapStateToProps)(Counter);

const App = () => (
  <Provider store={store}>
    <Container />
  </Provider>
);

export default App;
