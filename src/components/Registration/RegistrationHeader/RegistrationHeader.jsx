import React, { Component } from "react";
import "./RegistrationHeader.scss";
export default class RegistrationHeader extends Component {
  render() {
    return (
      <header>
        <div className="logo">Notion</div>
        <div className="links">
          <a href="">Product</a>
          <a href="">Pricing</a>
          <a href="">IOS & Android</a>
          <a href="">Desktop</a>
          <a href="">Log In</a>
        </div>
      </header>
    );
  }
}
