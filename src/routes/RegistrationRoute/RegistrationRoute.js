import React, { Component } from "react";
import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";
import "./RegistrationRoute.css";

class RegistrationRoute extends Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => {},
    },
  };

  render() {
    return (
      <section>
        <h2>Sign up</h2>
        <p className ="practice"> 
          Practice learning a language with the spaced reptition revision
          technique.
        </p>
        <RegistrationForm/>
      </section>
    );
  }
}

export default RegistrationRoute;
