import React, { Component } from "react";
import { observer } from "mobx-react";

@observer
class TodoList extends Component {
  onNewTodo() {
    this.props.store.addTodo(prompt("Enter a new todo:", "coffee plz"));
  }
  render() {
    const store = this.props.store;
    return (
      <div>
        {store.report}
        <ul>
          {store.todos.map((todo, idx) => <TodoView todo={todo} key={idx} />)}
        </ul>
        <button onClick={this.onNewTodo.bind(this)}>New Todo</button>
        <small> (double-click a todo to edit)</small>
      </div>
    );
  }
}

@observer
class TodoView extends Component {
  onToggleCompleted() {
    let todo = this.props.todo;
    todo.completed = !todo.completed;
  }
  render() {
    const todo = this.props.todo;
    return (
      <li>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={this.onToggleCompleted.bind(this)}
        />
        {todo.task}
        {todo.assignee ? <small>{todo.assignee.name}</small> : null}
        {/* <RenderCounter /> */}
      </li>
    );
  }
}

export default TodoList;
