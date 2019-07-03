import React, { Component } from "react";
import AuthenticationService from "./AuthenticationService";

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
    AuthenticationService.executeBasicAuthenticationService(
      this.state.username,
      this.state.password
    )
      .then(result => {
        AuthenticationService.registerSuccessfulLogin(
          this.state.username,
          this.state.password
        );
        this.props.history.push(`/welcome/${this.state.username}`);
      })
      .catch(error => {
        this.setState({ showSuccessMessage: false });
        this.setState({ hasLoginFailed: true });
      });
  }

  render() {
    return (
      <div>
        <h1>Login</h1>
        <div className="container">
          {this.state.hasLoginFailed && (
            <div className="alert alert-warning">Invalid credentials</div>
          )}
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
          <button className="btn btn-success" onClick={this.loginClicked}>
            Login
          </button>
        </div>
      </div>
    );
  }
}

export default LoginComponent;
