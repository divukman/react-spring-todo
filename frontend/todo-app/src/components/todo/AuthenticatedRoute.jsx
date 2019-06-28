import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import AuthenticateionService from "./AuthenticationService";

class AuthenticatedRoute extends Component {
  render() {
    if (AuthenticateionService.isUserLoggedIn()) {
      return <Route {...this.props} />;
    } else {
      return <Redirect to="/login" />;
    }
  }
}

export default AuthenticatedRoute;
