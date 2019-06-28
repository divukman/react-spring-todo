import React, { Component } from "react";

class ListTodosComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [
        {
          id: 1,
          description: "Learn React",
          done: false,
          targetDate: new Date()
        },
        {
          id: 2,
          description: "Drink coffee",
          done: false,
          targetDate: new Date()
        },
        {
          id: 3,
          description: "Watch Star Trek",
          done: false,
          targetDate: new Date()
        },
        {
          id: 4,
          description: "Go Swimming",
          done: false,
          targetDate: new Date()
        }
      ]
    };

    // this.temp = [];
    // this.state.todos.forEach(todo => {
    //   this.temp.push(
    //     <tr>
    //       <td>{todo.id}</td>
    //       <td>{todo.description}</td>
    //     </tr>
    //   );
    // });
  }

  render() {
    return (
      <div>
        {" "}
        <h1>List Todos </h1>
        <div className="container">
          <table className="table">
            <thead>
              <tr>
                <th>Descrption</th>
                <th>Done</th>
                <th>Target date</th>
              </tr>
            </thead>

            <tbody>
              {this.state.todos.map(todo => {
                return (
                  <tr key={todo.id}>
                    <td>{todo.description}</td>
                    <td>{todo.done.toString()}</td>
                    <td>{todo.targetDate.toString()}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default ListTodosComponent;
