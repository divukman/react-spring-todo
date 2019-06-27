import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class TodoApp extends Component {
  render() {
    return (
      <div className="TodoApp">
        <Router>
          <Switch>
            <Route path="/" exact component={LoginComponent} />
            <Route path="/login" component={LoginComponent} />
            <Route path="/welcome/:name" component={WelcomeComponent} />
            <Route component={ErrorComponent} />
          </Switch>
        </Router>
      </div>
    );
  }
}

class WelcomeComponent extends Component {
  render() {
    return <div> Welcome {this.props.match.params.name} </div>;
  }
}

class LoginComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "dimitar",
      password: "password",
      hasLoginFailed: false,
      showSuccessMessage: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.loginClicked = this.loginClicked.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  loginClicked() {
    if (
      this.state.username === "dimitar" &&
      this.state.password === "password"
    ) {
      this.props.history.push(`/welcome/${this.state.username}`);
      //   this.setState({ showSuccessMessage: true });
      //   this.setState({ hasLoginFailed: false });
    } else {
      this.setState({ showSuccessMessage: false });
      this.setState({ hasLoginFailed: true });
    }
  }

  render() {
    return (
      <div>
        {this.state.showSuccessMessage && <div>Login successful</div>}
        {this.state.hasLoginFailed && <div>Invalid credentials</div>}
        User Name:{" "}
        <input
          type="text"
          name="username"
          value={this.state.username}
          onChange={this.handleChange}
        />
        Password:{" "}
        <input
          type="password"
          name="password"
          value={this.state.password}
          onChange={this.handleChange}
        />
        <button onClick={this.loginClicked}>Login</button>
      </div>
    );
  }
}

function ErrorComponent() {
  return <div>An error occured.</div>;
}

//
// function ShowInvalidCredentials(props) {
//   if (props.hasLoginFailed) {
//     return <div>Invalid credentials</div>;
//   }
//   return null;
// }

// function ShowLoginSuccessful(props) {
//   if (props.showSuccessMessage) {
//     return <div>Login successful</div>;
//   }
//   return null;
// }

export default TodoApp;
