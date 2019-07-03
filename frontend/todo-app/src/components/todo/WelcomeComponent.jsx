import React, { Component } from "react";
import { Link } from "react-router-dom";
import HelloWorldService from "../../api/todo/HelloWorldService";

class WelcomeComponent extends Component {
  constructor(props) {
    super(props);

    this.getWelcomeMessage = this.getWelcomeMessage.bind(this);
    this.handleSuccessfulResponse = this.handleSuccessfulResponse.bind(this);

    this.state = {
      welcomeMessage: ""
    };
  }

  render() {
    return (
      <div>
        <h1>Welcome!</h1>
        <div className="container">
          Welcome {this.props.match.params.name}. You can manage your todos{" "}
          <Link to="/todos">here</Link>.
        </div>

        <div className="container">
          Click the button to get the welcome message from the service.
          <button className="btn btn-success" onClick={this.getWelcomeMessage}>
            Get message
          </button>
        </div>

        <div className="container"> {this.state.welcomeMessage} </div>
      </div>
    );
  }

  getWelcomeMessage() {
    const handleSuccess = response => {
      this.setState({
        welcomeMessage: response.data.message
      });
    };

    const handleError = err => {
      let errorMessage = "";

      if (err.message) {
        errorMessage += err.message;
      }

      if (err.response && err.response.data) {
        errorMessage += err.response.data.message;
      }

      this.setState({
        welcomeMessage: errorMessage
      });
    };

    console.log("get welcome message button clicked");
    HelloWorldService.executeHelloWorldPathVariableService(
      this.props.match.params.name
    )
      .then(result => {
        handleSuccess(result);
      })
      .catch(err => handleError(err));
  }

  handleSuccessfulResponse(response) {
    this.setState({
      welcomeMessage: response.data
    });
  }
}

export default WelcomeComponent;
