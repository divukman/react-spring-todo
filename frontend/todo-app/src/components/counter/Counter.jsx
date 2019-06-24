import React, { Component } from "react";
import "./Counter.css";
import PropTypes from "prop-types";

class Counter extends Component {
  constructor() {
    super();

    this.state = {
      counter: 0
    };

    this.increment = this.increment.bind(this); //cunga luga java scripta, oce bit OO jezik, a govno je
  }

  render() {
    return (
      <div className="counter">
        <button onClick={this.increment}> + {this.props.by} </button>
        <span className="count"> {this.state.counter} </span>
      </div>
    );
  }

  increment() {
    this.setState({
      counter: this.state.counter + this.props.by
    });
  }
}

Counter.defaultProps = {
  by: 1
};

Counter.propTypes = {
  by: PropTypes.number
};

export default Counter;
