import React, { Component } from "react";
import TodoDataService from "../../api/todo/TodoDataService";
import AuthenticationService from "./AuthenticationService";
import moment from "moment";

class ListTodosComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [
        // {
        //   id: 1,
        //   description: "Learn React",
        //   done: false,
        //   targetDate: new Date()
        // },
        // {
        //   id: 2,
        //   description: "Drink coffee",
        //   done: false,
        //   targetDate: new Date()
        // }
      ],
      message: ""
    };

    this.deleteTodoClicked = this.deleteTodoClicked.bind(this);
    this.updateTodoClicked = this.updateTodoClicked.bind(this);
    this.addTodoClicked = this.addTodoClicked.bind(this);
  }

  componentDidMount() {
    const username = AuthenticationService.getLoggedInUsername();
    TodoDataService.retrieveAllTodos(username).then(result => {
      console.log(result.data);
      this.setState({ todos: result.data });
    });
  }

  deleteTodoClicked(id) {
    const username = AuthenticationService.getLoggedInUsername();
    TodoDataService.deleteTodo(username, id).then(result => {
      let newList = this.state.todos.filter(todo => todo.id != id);
      this.setState({ todos: newList, message: `Todo with id ${id} deleted.` });
    });
  }

  updateTodoClicked(id) {
    const username = AuthenticationService.getLoggedInUsername();
    this.props.history.push(`/todos/${id}`);
  }

  addTodoClicked() {
    const username = AuthenticationService.getLoggedInUsername();
    this.props.history.push("/todos/-1");
  }

  render() {
    return (
      <div>
        {this.state.message && (
          <div className="alert alert-success">{this.state.message}</div>
        )}
        <h1>List Todos </h1>
        <div className="container">
          <table className="table">
            <thead>
              <tr>
                <th>Descrption</th>
                <th>Done</th>
                <th>Target date</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>

            <tbody>
              {this.state.todos.map(todo => {
                return (
                  <tr key={todo.id}>
                    <td>{todo.description}</td>
                    <td>{todo.done.toString()}</td>
                    <td>{moment(todo.targetDate).format("YYYY-MM-DD")}</td>
                    <td>
                      <button
                        onClick={() => this.updateTodoClicked(todo.id)}
                        className="btn btn-success"
                      >
                        Update
                      </button>
                    </td>
                    <td>
                      <button
                        onClick={() => this.deleteTodoClicked(todo.id)}
                        className="btn btn-warning"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div className="row">
            <button
              onClick={() => this.addTodoClicked()}
              className="btn btn-success"
            >
              Add
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default ListTodosComponent;
