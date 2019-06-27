import React, { Component } from "react";
import "./Counter.css";
import PropTypes from "prop-types";

class Counter extends Component {
  constructor() {
    super();

    this.state = {
      counter: 0
    };

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.reset = this.reset.bind(this);
  }

  render() {
    return (
      <div className="Counter">
        <CounterButton
          incrementMethod={this.increment}
          decrementMethod={this.decrement}
        />
        {
          // Moga je ovako to risit: <CounterButton by={-1} incrementMethod={this.increment} />
        }
        <CounterButton
          by={5}
          incrementMethod={this.increment}
          decrementMethod={this.decrement}
        />
        <CounterButton
          by={10}
          incrementMethod={this.increment}
          decrementMethod={this.decrement}
        />

        <span className="count"> {this.state.counter} </span>

        <div>
          <button className="reset" onClick={this.reset}>
            Reset
          </button>
        </div>
      </div>
    );
  }

  // Ovaj nacin se cini pogresan. Mozda bi bilo idealnije sa Observer Patternom rjesiti.
  // Samo, kako ces u java scriptu rec da je nesto interface, pa proslijedit... dobro, moze se nesto slicno
  increment(by) {
    console.log(`Increment from child: {by}`);
    this.setState(prevState => {
      return { counter: prevState.counter + by };
    });
  }

  decrement(by) {
    console.log(`Decrement from child: {by}`);
    this.setState(prevState => {
      return { counter: prevState.counter - by };
    });
  }

  reset() {
    this.setState(() => {
      return { counter: 0 };
    });
  }
}

class CounterButton extends Component {
  constructor() {
    super();
  }

  /**
   * Pazi jako dobro doli. onClicke ocekuje REFERENCU, ne mozes samo pozvat metodu. Zato arrow metoda.
   */
  render() {
    return (
      <div className="counter">
        <button onClick={() => this.props.incrementMethod(this.props.by)}>
          {" "}
          + {this.props.by}{" "}
        </button>
        <button onClick={() => this.props.decrementMethod(this.props.by)}>
          {" "}
          - {this.props.by}{" "}
        </button>
      </div>
    );
  }
}

CounterButton.defaultProps = {
  by: 1
};

CounterButton.propTypes = {
  by: PropTypes.number,
  incrementMethod: PropTypes.func,
  decrementMethod: PropTypes.func
};

export default Counter;
