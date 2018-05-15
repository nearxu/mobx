import React, { Component } from "react";
import { observable, computed, autorun } from "mobx";
// import TimerView from "./todo";
// import Todos from "./todos";
import TodoList from "./react-todo";
import "./App.css";

// var appState = observable({ timer: 0 });
// appState.resetTimer = function reset() {
//   appState.timer = 0;
// };

// setInterval(function tick() {
//   appState.timer += 1;
// }, 1000);

class ObservableTodoStore {
  @observable todos = [];
  @observable pendingRequests = 0;

  constructor() {
    autorun(() => console.log(this.report));
  }

  @computed
  get completedTodosCount() {
    return this.todos.filter(todo => todo.completed === true).length;
  }

  @computed
  get report() {
    if (this.todos.length === 0) {
      return "<none>";
    }
    return (
      `Next todo: "${this.todos[0].task}". ` +
      `Progress: ${this.completedTodosCount}/${this.todos.length}`
    );
  }

  addTodo(task) {
    this.todos.push({
      task: task,
      completed: false,
      assignee: null
    });
  }
}

const observableTodoStore = new ObservableTodoStore();

observableTodoStore.addTodo("read MobX tutorial");
observableTodoStore.addTodo("try MobX");

var peopleStore = observable([{ name: "Michel" }, { name: "Me" }]);

observableTodoStore.todos[0].assignee = peopleStore[0];
observableTodoStore.todos[1].assignee = peopleStore[1];
peopleStore[0].name = "Michel Weststrate";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <TimerView appState={appState} /> */}
        {/* <Todos /> */}
        <TodoList store={observableTodoStore} />
      </div>
    );
  }
}

export default App;
