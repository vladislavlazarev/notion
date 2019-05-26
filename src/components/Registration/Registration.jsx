import React, { Component, Fragment } from "react";
import "./Registration.scss";
import "./RegistrationHeader/RegistrationHeader";
export default class Registration extends Component {
  render() {
    return (
      <Fragment>
        <header />
        <div className="log-in-container">
          <h1>Log In</h1>
          <div className="sign-in-btn">
            <a>Continue with Google</a>
          </div>
        </div>
      </Fragment>
    );
  }
}
