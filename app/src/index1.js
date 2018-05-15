import React, { Component } from "react";
import TodoList from "./list";
import { observable, computed, autorun } from "mobx";

class Store {
  @observable todos = [];
  constructor() {
    autorun(() => console.log(this.report));
  }
  @computed
  get completedCounter() {
    return this.todos.filter(todo => todo.completed === true).length;
  }
  @computed
  get report() {
    if (this.todos.length === 0) {
      return "<none>";
    }
    return (
      `Next todo: "${this.todos[0].task}". ` +
      `Progress: ${this.completedCounter}/${this.todos.length}`
    );
  }
  addTodo(task) {
    this.todos.push({
      task,
      complted: false,
      assignee: null
    });
  }
}

const observableTodoStore = new Store();

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
        <TodoList store={observableTodoStore} />
      </div>
    );
  }
}

export default App;
