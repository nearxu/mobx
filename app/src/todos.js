import React from "react";

// no mobx
// class TodoStore {
//     todos = [];

//     get completedTodosCount() {
//         return this.todos.filter(
//             todo => todo.completed === true
//         ).length;
//     }

//     report() {
//         if (this.todos.length === 0) return "<none>";
//         return `Next todo: "${this.todos[0].task}". ` +
//             `Progress: ${this.completedTodosCount}/${this.todos.length}`;
//     }

//     addTodo(task) {
//         this.todos.push({
//             task: task,
//             completed: false,
//             assignee: null
//         });
//     }
// }

// const todoStore = new TodoStore();

// todoStore.addTodo("read MobX tutorial");
// console.log(todoStore.report());

// todoStore.addTodo("try MobX");
// console.log(todoStore.report());

// 使用 autorun 时，所提供的函数总是立即被触发一次
// 不要把 computed 和 autorun 搞混。它们都是响应式调用的表达式，
// 但是，如果你想响应式的产生一个可以被其它 observer 使用的值，
// 请使用 @computed，如果你不想产生一个新值，而想要达到一个效果，
// 请使用 autorun。
import { observable, autorun, computed } from "mobx";

class Store {
  @observable todos = [];
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
      task,
      computed: false,
      assignee: null
    });
  }
}

const observerStore = new Store();
observerStore.addTodo("read MobX tutorial");
observerStore.addTodo("try MobX");
observerStore.todos[0].completed = true;
observerStore.todos[1].task = "try MobX in own project";

class Index extends React.Component {
  render() {
    return <div>hello mobx</div>;
  }
}

export default Index;
