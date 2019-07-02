import React, { Component } from "react";

class TodoComponent extends Component {
  render() {
    return <div>Render Component for Id: {this.props.match.params.id}</div>;
  }
}
export default TodoComponent;
