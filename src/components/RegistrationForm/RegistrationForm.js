import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Input, Label } from "../Form/Form";
import AuthApiService from "../../services/auth-api-service";
import UserContext from '../../contexts/UserContext';
import Button from "../Button/Button";
import "../Form/Form.css";
import "./RegistrationForm.css";

class RegistrationForm extends Component {

  state = { error: null };
  static contextType = UserContext

  firstInput = React.createRef();

  handleSubmit = (ev) => {
    ev.preventDefault();
    const { name, username, password } = ev.target;
    AuthApiService.postUser({
      name: name.value,
      username: username.value,
      password: password.value,
    })
      .then(() => {
        AuthApiService.postLogin({
        username: username.value,
        password: password.value,
      })
        .then((res) => {
          this.context.processLogin(res.authToken);
        })
      })
      .catch((res) => {
        this.setState({ error: res.error });
      });
  };

  componentDidMount() {
    this.firstInput.current.focus();
  }

  render() {
    const { error } = this.state;
    return (
      <div className="form-style-container">
        <form onSubmit={this.handleSubmit}>
          <div role="alert">{error && <p>{error}</p>}</div>

          <div className="registration-name">
            <Label htmlFor="registration-name-input">Enter your name</Label>
            <Input
              ref={this.firstInput}
              id="registration-name-input"
              name="name"
              required
            />
          </div>

          <div className="registration-username">
            <Label htmlFor="registration-username-input">
              Choose a username
            </Label>
            <Input id="registration-username-input" name="username" required />
          </div>

          <div className="registration-password">
            <Label htmlFor="registration-password-input">
              Choose a password
            </Label>
            <Input
              id="registration-password-input"
              name="password"
              type="password"
              required
            />
          </div>

          <div className="submit-container">
            <Button type="submit" className="submit">
              Sign up
            </Button>{" "}
            <br />
            <Link to="/login">Already have an account?</Link>
          </div>
        </form>
      </div>
    );
  }
}

export default RegistrationForm;
