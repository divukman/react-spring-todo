import React, { Component } from "react";
import moment from "moment";
import { Formik, Form, Field, ErrorMessage } from "formik";
import TodoDataService from "../../api/todo/TodoDataService";
import AuthenticationService from "./AuthenticationService";

class TodoComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.match.params.id,
      description: "",
      targetDate: moment(new Date()).format("YYYY-MM-DD"),
      done: false
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.validate = this.validate.bind(this);
  }

  componentDidMount() {
    if (this.state.id !== -1) {
      const username = AuthenticationService.getLoggedInUsername();
      TodoDataService.retrieveTodo(username, this.state.id).then(response =>
        this.setState({
          description: response.data.description,
          targetDate: moment(response.data.targetDate).format("YYYY-MM-DD"),
          done: response.data.done
        })
      );
    }
  }

  onSubmit(values) {
    const username = AuthenticationService.getLoggedInUsername();

    const todo = {
      id: this.state.id,
      description: values.description,
      targetDate: values.targetDate,
      done: this.state.done
    };

    if (this.state.id !== -1) {
      TodoDataService.updateTodo(username, this.state.id, todo).then(res =>
        this.props.history.push("/todos")
      );
    } else {
      TodoDataService.createTodo(username, todo).then(res =>
        this.props.history.push("/todos")
      );
    }
  }

  validate(values) {
    let errors = {};

    if (!values.description) {
      errors.description = "Enter a description";
    } else if (values.description.length < 5) {
      errors.description = "Enter at least 5 characters for description";
    }

    if (!moment(values.targetDate).isValid()) {
      errors.targetDate = "Enter a valid date";
    }

    return errors;
  }

  render() {
    const { description, targetDate } = this.state;

    return (
      <div>
        <h1>Todo</h1>
        <div className="container">
          <Formik
            initialValues={{
              description,
              targetDate
            }}
            onSubmit={this.onSubmit}
            validate={this.validate}
            validateOnChange={false}
            validateOnBlur={false}
            enableReinitialize={true}
          >
            {props => {
              return (
                <Form>
                  <ErrorMessage
                    name="description"
                    component="div"
                    className="alert alert-warning"
                  />
                  <ErrorMessage
                    name="targetDate"
                    component="div"
                    className="alert alert-warning"
                  />
                  <fieldset className="form-group">
                    <label>Description</label>
                    <Field
                      className="form-control"
                      type="text"
                      name="description"
                    />
                  </fieldset>
                  <fieldset className="form-group">
                    <label>Target Date</label>
                    <Field
                      className="form-control"
                      type="date"
                      name="targetDate"
                    />
                  </fieldset>
                  <button className="btn btn-success" type="submit">
                    Save
                  </button>
                </Form>
              );
            }}
          </Formik>
        </div>
        {
          // Render Component for Id: {this.props.match.params.id}
        }
      </div>
    );
  }
}
export default TodoComponent;
