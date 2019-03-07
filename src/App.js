import React, { Component } from "react";
// import { Button } from "semantic-ui-react";
import Todo from "../src/components/Todo";
import Main from "../src/components/Main";
import Navbar from "../src/components/Navbar";

class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      todos: []
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=8")
      .then(response => response.json())
      .then(response => {
        this.setState({
          todos: response
        });
      });
  }

  handleChange(id) {
    this.setState(prevState => {
      const updatedList = prevState.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      });
      return updatedList;
    });
  }

  render() {
    const Tododata = this.state.todos.map(todo => (
      <Todo
        key={todo.id}
        item={todo.title}
        completed={todo.completed}
        handleChange={this.handleChange}
        id={todo.id}
      />
    ));
    return (
      <div>
        <Navbar />
        <Main />
        {Tododata}
      </div>
    );
  }
}

export default App;
